const getImgUrl = (image) => {
    let result
    result = image.slice(1, -1).split(',')[0].split('":')[1].split('}')[0].slice(1, -1)
    return result
}

export default getImgUrl