const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Touch,
		C3.Plugins.Audio,
		C3.Plugins.Browser,
		C3.Plugins.Text,
		C3.Plugins.Sprite,
		C3.Plugins.Button,
		C3.Behaviors.Bullet,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Browser.Acts.Close,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Plugins.System.Acts.SetVar,
		C3.Behaviors.Bullet.Acts.SetAngleOfMotion,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Exps.layoutwidth,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.CompareVar
	];
};
self.C3_JsPropNameTable = [
	{Touch: 0},
	{bgm: 0},
	{Browser: 0},
	{Textjudul: 0},
	{Sprite: 0},
	{ButtonMulai: 0},
	{Buttonkeluar: 0},
	{background: 0},
	{Bullet: 0},
	{bintang: 0},
	{TextSkor: 0},
	{TextProfilJudul: 0},
	{TextProfil: 0},
	{PhotoUlum: 0},
	{Sprite3: 0},
	{Sprite2: 0},
	{Skor: 0}
];

self.InstanceType = {
	Touch: class extends self.IInstance {},
	bgm: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	Textjudul: class extends self.ITextInstance {},
	Sprite: class extends self.ISpriteInstance {},
	ButtonMulai: class extends self.IButtonInstance {},
	Buttonkeluar: class extends self.IButtonInstance {},
	background: class extends self.ISpriteInstance {},
	bintang: class extends self.ISpriteInstance {},
	TextSkor: class extends self.ITextInstance {},
	TextProfilJudul: class extends self.ITextInstance {},
	TextProfil: class extends self.ITextInstance {},
	PhotoUlum: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {}
}