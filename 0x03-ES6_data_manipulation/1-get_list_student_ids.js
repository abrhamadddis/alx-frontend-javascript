export default function getListStudentIds(arr) {
    const result = Array.isArray(arr);
    if (result){
        return arr.map(element => element.id)
    }
    else {
        return [];
    }
}