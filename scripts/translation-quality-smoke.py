# One-time translation provider quality check; not used at request time.
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


samples = [
    "Minecraft Dungeons 2 Capes: Every Confirmed Cape",
    "The game supports cross-platform co-op.",
    "Gear may include armor, weapons, and artifacts.",
    "Players can use party codes to join friends.",
]
for mode in ("repeat_q", "newline_q"):
    params=[("client","gtx"),("sl","en"),("tl","zh-CN"),("dt","t")]
    if mode=="repeat_q":
        params.extend(("q", item) for item in samples)
    else:
        params.append(("q", "\n\n".join(samples)))
    url="https://translate.googleapis.com/translate_a/single?"+urllib.parse.urlencode(params)
    try:
        req=urllib.request.Request(url,headers={"User-Agent":"Mozilla/5.0"})
        with urllib.request.urlopen(req,timeout=25) as resp:
            data=json.load(resp)
        print(json.dumps({"batch_mode":mode,"result":data[0]},ensure_ascii=False),flush=True)
    except Exception as e:
        print(json.dumps({"batch_mode":mode,"error":str(e)}),flush=True)

# Validate batching and name preservation before generating all language pages.
sample="The Minecraft Dungeons II Hero Cape is a cosmetic reward. The Prime Enchanter has several attacks. Do not confuse gear with mechanical gears."
for method in ("post","get"):
  params={"client":"gtx","sl":"en","tl":"zh-CN","dt":"t","q":sample}
  try:
    data=urllib.parse.urlencode(params).encode()
    req=urllib.request.Request("https://translate.googleapis.com/translate_a/single"+("?" + urllib.parse.urlencode(params) if method=="get" else ""),data=(data if method=="post" else None),headers={"User-Agent":"Mozilla/5.0"})
    with urllib.request.urlopen(req,timeout=20) as resp: payload=json.load(resp)
    print(json.dumps({"method":method,"sample":"".join(x[0] for x in payload[0])},ensure_ascii=False),flush=True)
  except Exception as exc:
    print(json.dumps({"method":method,"error":str(exc)},ensure_ascii=False),flush=True)
