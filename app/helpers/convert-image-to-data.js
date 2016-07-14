export default function convertImageToData(url, callback) {

    var xhr = new XMLHttpRequest();

    xhr.responseType = 'blob';

    xhr.onload = () => {

        var reader = new FileReader();

        reader.onloadend = () => {
            callback(reader.result);
        };

        reader.readAsDataURL(xhr.response);
    };

    xhr.open('GET', url);
    xhr.send();

}