import json
import urllib.parse
import urllib.request

TEXT = "Minecraft Dungeons 2 Capes: Every Confirmed Cape. The cape index lists rewards, how to obtain them, and their availability. The game supports cross-platform multiplayer and party codes."
LANGS = ["zh-CN", "zh-TW", "ja", "ko", "de", "fr", "es", "pt"]
for lang in LANGS:
    params=urllib.parse.urlencode({"client":"gtx","sl":"en","tl":lang,"dt":"t","q":TEXT})
    url="https://translate.googleapis.com/translate_a/single?"+params
    try:
        req=urllib.request.Request(url,headers={"User-Agent":"Mozilla/5.0"})
        with urllib.request.urlopen(req,timeout=20) as resp:
            data=json.load(resp)
        value="".join(seg[0] for seg in data[0] if seg and seg[0])
        print(json.dumps({"lang":lang,"translation":value},ensure_ascii=False),flush=True)
    except Exception as e:
        print(json.dumps({"lang":lang,"error":str(e)}),flush=True)
