import { storage, db } from '../components/config/config';

// Function to upload an image to Firebase Storage
export const uploadImage = async (activityImage, activityName) => {
  const uploadTask = storage.ref(`Activityimage/${activityImage.name}`).put(activityImage);

  return new Promise((resolve, reject) => {
    uploadTask.on('state_changed', snapshot => {
      // Handle upload progress if needed
    }, err => {
      reject(err.message); // Reject with error message if upload fails
    }, () => {
      // Get download URL after successful upload
      storage.ref('Activityimage').child(activityImage.name).getDownloadURL().then(url => {
        resolve(url); // Resolve with the download URL
      }).catch(err => reject(err.message)); // Reject with error message if URL retrieval fails
    });
  });
};

// Function to update activity data in Firebase Firestore
export const updateActivity = async (activityData) => {
  const { activityName, format, activityVideo, activityImage } = activityData;

  try {
    // Validate required fields
    if (!activityName) {
      throw new Error('Activity Name is required');
    }
    if (!format) {
      throw new Error('Image or Video Link is required');
    }

    // Reference to the specific activity document in Firestore
    const activityRef = db.collection('Activity').doc("wtpj3aeg1qVx1DwO3GHn");

    // Update Firestore document based on the format of the activity
    if (format === "video") {
      await activityRef.update({
        activityName: activityName,
        activityVideo: activityVideo,
        activityImage: '',
      });
    } else if (format === "image") {
      // Upload image and update Firestore with the image URL
      const imageUrl = await uploadImage(activityImage, activityName);
      await activityRef.update({
        activityName: activityName,
        activityImage: imageUrl,
        activityVideo: '',
      });
    } else {
      // Update Firestore without image or video based on format
      await activityRef.update({
        activityName: activityName,
        activityImage: '',
        activityVideo: '',
      });
    }

    // Return success message if the update is successful
    return { success: true, message: 'Activity updated successfully' };
  } catch (error) {
    // Return error message if any error occurs during the update process
    return { success: false, message: error.message };
  }
};
