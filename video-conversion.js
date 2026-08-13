function softwareVideoArgs(srcPath, scale, destinationPath) {
    return ['-v', 'error', '-y', '-i', srcPath, '-filter:v', 'scale='+scale, '-c:v', 'h264', '-preset', 'slow', destinationPath];
}

function vaapiVideoArgs(srcPath, scale, destinationPath, device = '/dev/dri/renderD128') {
    return [
        '-v', 'error', '-y',
        '-vaapi_device', device,
        '-i', srcPath,
        '-filter:v', 'format=nv12,hwupload,scale_vaapi='+scale,
        '-c:v', 'h264_vaapi',
        '-preset', 'slow',
        destinationPath
    ];
}

module.exports = { softwareVideoArgs, vaapiVideoArgs };
