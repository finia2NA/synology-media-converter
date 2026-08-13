const assert = require('node:assert/strict');
const test = require('node:test');
const { softwareVideoArgs, vaapiVideoArgs } = require('../video-conversion');

test('VAAPI conversion decodes in software before uploading frames', () => {
    const args = vaapiVideoArgs('input.mov', "'-2:min(720,ih)'", 'output.mp4');

    assert.equal(args.includes('-hwaccel'), false);
    assert.deepEqual(args.slice(3, 5), ['-vaapi_device', '/dev/dri/renderD128']);
    assert.equal(args[args.indexOf('-filter:v') + 1], "format=nv12,hwupload,scale_vaapi='-2:min(720,ih)'");
    assert.equal(args[args.indexOf('-c:v') + 1], 'h264_vaapi');
});

test('software fallback uses the software scaler and H.264 encoder', () => {
    const args = softwareVideoArgs('input.mov', "'-2:min(720,ih)'", 'output.mp4');

    assert.equal(args[args.indexOf('-filter:v') + 1], "scale='-2:min(720,ih)'");
    assert.equal(args[args.indexOf('-c:v') + 1], 'h264');
});
