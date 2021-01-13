// Write your solution in this file!
const driver = {};


function updateDriverWithKeyAndValue(obj, key, value) {
    return Object.assign({}, obj, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function destructivelyDeleteFromDriverByKey(obj, key) {
    delete obj[key];
    return obj;

}

function deleteFromDriverByKey(obj, key) {

    const updatedObj =  Object.assign({}, obj);
    delete updatedObj[key];
    return updatedObj;
}
