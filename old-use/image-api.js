/**
 * 可以用于动态的图像合成或者作为图形的背景，以及游戏界面（Sprites）等等
 * 浏览器支持的任意格式的外部图片都可以使用，比如 PNG、GIF 或者 JPEG
 * 甚至可以将同一个页面中其他 canvas 元素生成的图片作为图片源
 *
 * 引入图像到 canvas 里需要以下两步基本操作：
 * 获得一个指向HTMLImageElement的对象或者另一个 canvas 元素的引用作为源，也可以通过提供一个 URL 的方式来使用图片
 * 使用drawImage()函数将图片绘制到画布上
 * 
 * drawImage(image, x, y): image 是 image 或者 canvas 对象，x 和 y 是其在目标 canvas 里的起始坐标
 * 
 * drawImage(image, x, y, width, height): width 和 height，这两个参数用来控制 当向 canvas 画入时应该缩放的大小
 * 
 * drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight):
 * 第一个参数和其他的是相同的，都是一个图像或者另一个 canvas 的引用
 * 前 4 个是定义图像源的切片位置和大小
 * 后 4 个则是定义切片的目标显示位置和大小
 * 
 * imageData,存储着 canvas 对象真实的像素数据，它包含以下几个只读属性：
 * width：图片宽度，单位是像素
 * height: 图片高度，单位是像素
 * data: Uint8ClampedArray 类型的一维数组，包含着 RGBA 格式的整型数据，范围在 0 至 255 之间
 * 例如，要读取图片中位于第 50 行，第 200 列的像素的蓝色部份:
 * blueComponent = imageData.data[((50 * (imageData.width * 4)) + (200 * 4)) + 2];
 * 
 * 写入像素数据
 * ctx.putImageData(myImageData, dx, dy);
 */

export function drawImage(ctx) {
    const img = new Image()
    // img.src = require('@img/01.jpg')
    img.onload = function () {
        ctx.drawImage(img, 0, 0)
    }
    img.src = '../static/image/01.jpg'
}
