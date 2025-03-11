input.onGesture(Gesture.Shake, function () {
    pas += 1
})
input.onGesture(Gesture.FreeFall, function () {
    puissance += 1
    basic.showString("" + (puissance))
    music.play(music.createSoundExpression(WaveShape.Square, 400, 600, 255, 0, 1000, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
let puissance = 0
let pas = 0
puissance = -1
basic.forever(function () {
    if (pas == 100000) {
        basic.showIcon(IconNames.Heart)
    }
})
basic.forever(function () {
    if (puissance == 10000) {
        basic.showIcon(IconNames.Heart)
    }
})
basic.forever(function () {
    basic.showString("" + (pas))
})
basic.forever(function () {
    if (pas == puissance) {
        music.play(music.createSoundExpression(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        music.play(music.createSoundExpression(WaveShape.Square, 400, 600, 255, 0, 1000, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
})
