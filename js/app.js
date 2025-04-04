window.appInterop = {
    copyToClipboard: async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (err) {
            console.error("Failed to copy text: ", err);
            return false;
        }
    },

    downloadFile: (fileName, dataUrl) => {
        try {
            // Create an anchor tag
            const link = document.createElement('a');

            // Set the download attribute with the file name
            link.download = fileName;

            // Set the href attribute to the data URL
            link.href = dataUrl;

            // Trigger a click on the anchor tag to start the download
            link.click();
            return true;
        } catch (err) {
            console.error("Failed to download file: ", err);
            return false;
        }
    }
};
