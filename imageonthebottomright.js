/**
 * @name BottomRightImage
 * @version 1.0.0
 * @description Adds an image or GIF to the bottom-right corner of Discord.
 * @author YourName
 * @source https://github.com/YourRepo/BottomRightImage
 * @updateUrl https://github.com/YourRepo/BottomRightImage/raw/main/BottomRightImage.plugin.js
 */

module.exports = class BottomRightImage {
    constructor() {}

    start() {
        // Create the image element
        this.image = document.createElement('img');
        this.image.src = 'https://i.imgur.com/B8gkyk8.png'; // Replace with your Imgur image/GIF link
        this.image.style.position = 'fixed';
        this.image.style.bottom = '10px';
        this.image.style.right = '10px';
        this.image.style.zIndex = '9999';
        this.image.style.width = '100px';
        this.image.style.height = '100px';
        this.image.style.borderRadius = '10px';
        this.image.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
        
        // Add the image to the document body
        document.body.appendChild(this.image);
    }

    stop() {
        // Remove the image when the plugin stops
        if (this.image) {
            this.image.remove();
            this.image = null;
        }
    }
};
