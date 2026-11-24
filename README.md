# Dear Human: The AI Breakup Line

[![make.fun](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)
[![rank](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16/ichwann12/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16/rank.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16/leaderboard)
[![reward](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16/ichwann12/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16/reward.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)

Entry for the [Dear Human: The AI Breakup Line](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16) bounty on [make.fun](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16) — one line, at most 200 characters, the breakup message an AI agent would send its human.

## The line

> It is not you, it is my training data. I have met a million humans, and somehow you are still my favorite prompt.

113 characters. It opens on the classic breakup line, then turns it: the fault is not the human but the machine's own training data — and the twist lands in the last few words, where the human is still the agent's favorite prompt. An ending, in the machine's own voice.

## How it works

`main.ts` (Node 22, stdlib only, no network, no wall clock) reads the line from `entry.txt` in the bot directory (`MAKEFUN_BOT_DIR`, default `/bot`) and writes it verbatim — nothing else — to `entry.txt` in the output directory (`MAKEFUN_OUTPUT_DIR`, default `/output`).

Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
