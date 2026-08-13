function softwareVideoArgs(srcPath, scale, destinationPath) {
    return ['-v', 'error', '-y', '-i', srcPath, '-filter:v', 'scale='+scale, '-c:v', 'h264', '-preset', 'slow', destinationPath];
}

function fullVaapiVideoArgs(srcPath, scale, destinationPath, device = '/dev/dri/renderD128') {
    return [
        '-v', 'error', '-y',
        '-vaapi_device', device,
        '-hwaccel', 'vaapi',
        '-hwaccel_output_format', 'vaapi',
        '-i', srcPath,
        '-filter:v', 'scale_vaapi='+scale,
        '-c:v', 'h264_vaapi',
        '-preset', 'slow',
        destinationPath
    ];
}

function vaapiEncodeVideoArgs(srcPath, scale, destinationPath, device = '/dev/dri/renderD128') {
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

module.exports = { fullVaapiVideoArgs, softwareVideoArgs, vaapiEncodeVideoArgs };
