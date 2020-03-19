"use strict";

// func uploadImageToInput makes #viewImg show the content of the uploaded image.
function uploadImageToInput() {
    const element_uploadImage = document.getElementById('uploadImage');
    //The maximum size of the image is 4 MB, otherwise it will be compressed.
    const const_maxSize = 4 * 1024 * 1024;
    const obj_image = element_uploadImage.files[0];

    if (obj_image.size > const_maxSize) {
        compressImage(obj_image, base64ization, function (str) {
            document.getElementById('viewImg').src = str
        })
    } else {
        base64ization(obj_image, function (str) {
            document.getElementById('viewImg').src = str

        })

    }
}


function base64ization(obj_file, callback) {
    let string_imageBase64 = '';
    const obj_fileReader = new FileReader();
    obj_fileReader.readAsDataURL(obj_file);
    obj_fileReader.onload = function (event) {
        try {


            if (obj_fileReader.result == null) {
                throw 'err: fileReader is null';
            } else {
                string_imageBase64 = event.target.result;
                callback(string_imageBase64);
            }

        } catch (err) {
            console.log(err.message);
        }

    }

}


function compressImage(obj_file, func_base64ization, callback) {
    func_base64ization(obj_file, function (str) {
        const image = new Image();
        image.src = str;
        image.onload = function () {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            const imageWidth = image.width / 2;
            const imageHeight = image.height / 2;
            context.drawImage(image, 0, 0, imageWidth, imageHeight);
            let string_imageAfterBeingCompressed = canvas.toDataURL('image/jpeg');
            callback(string_imageAfterBeingCompressed);
        }
    })
}


function image2Text(image,somewhereToDisplay) {

    let str_contentOfImage=OCRAD(image)
    console.log(str_contentOfImage)
    alert(str_contentOfImage)
    document.getElementById(somewhereToDisplay).innerHTML=str_contentOfImage
}