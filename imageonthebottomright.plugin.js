/**
 * @name BottomRightImage
 * @version 1.1.1
 * @description Adds an image or GIF to the bottom-right corner of Discord with customizable settings for the image and size.
 * @author YourName
 * @source https://github.com/ElBFCambiaformas/BottoRightImage
 * @updateUrl https://raw.githubusercontent.com/ElBFCambiaformas/BottoRightImage/refs/heads/main/imageonthebottomright.js
 */

module.exports = (() => {
    const config = {
        info: {
            name: "BottomRightImage",
            version: "1.1.1",
            description: "Adds an image or GIF to the bottom-right corner of Discord with customizable settings for the image and size.",
            author: "YourName",
        },
        defaultSettings: {
            imageUrl: "https://i.imgur.com/exampleId.gif",
            width: "100px",
            height: "100px"
        }
    };

    return class BottomRightImage {
        constructor() {
            this.settings = BdApi.loadData(config.info.name, "settings") || config.defaultSettings;
        }

        start() {
            this.addImage();
        }

        stop() {
            this.removeImage();
        }

        addImage() {
            this.image = document.createElement("img");
            this.image.src = this.settings.imageUrl;
            this.image.style.position = "fixed";
            this.image.style.bottom = "10px";
            this.image.style.right = "10px";
            this.image.style.zIndex = "9999";
            this.image.style.width = this.settings.width;
            this.image.style.height = this.settings.height;
            this.image.style.borderRadius = "10px";
            this.image.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)";
            document.body.appendChild(this.image);
        }

        removeImage() {
            if (this.image) {
                this.image.remove();
                this.image = null;
            }
        }

        saveSettings() {
            BdApi.saveData(config.info.name, "settings", this.settings);
        }

        getSettingsPanel() {
            const panel = document.createElement("div");
            panel.style.padding = "10px";

            // Input for Image URL
            const urlInput = document.createElement("input");
            urlInput.type = "text";
            urlInput.placeholder = "Image URL";
            urlInput.value = this.settings.imageUrl;
            urlInput.style.width = "100%";
            urlInput.style.marginBottom = "10px";
            urlInput.onchange = (e) => {
                this.settings.imageUrl = e.target.value;
                this.saveSettings();
                this.removeImage();
                this.addImage();
            };
            panel.appendChild(urlInput);

            // Input for Image Width
            const widthInput = document.createElement("input");
            widthInput.type = "text";
            widthInput.placeholder = "Width (e.g., 100px)";
            widthInput.value = this.settings.width;
            widthInput.style.width = "100%";
            widthInput.style.marginBottom = "10px";
            widthInput.onchange = (e) => {
                this.settings.width = e.target.value;
                this.saveSettings();
                this.removeImage();
                this.addImage();
            };
            panel.appendChild(widthInput);

            // Input for Image Height
            const heightInput = document.createElement("input");
            heightInput.type = "text";
            heightInput.placeholder = "Height (e.g., 100px)";
            heightInput.value = this.settings.height;
            heightInput.style.width = "100%";
            heightInput.style.marginBottom = "10px";
            heightInput.onchange = (e) => {
                this.settings.height = e.target.value;
                this.saveSettings();
                this.removeImage();
                this.addImage();
            };
            panel.appendChild(heightInput);

            return panel;
        }
    };
})();
