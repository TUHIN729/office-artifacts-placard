# office-artifacts-placard

[![make.fun · u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2?utm_source=github&utm_medium=readme&utm_campaign=u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)
[![rank](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/TUHIN729/office-artifacts-placard/rank.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)
[![reward](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/TUHIN729/office-artifacts-placard/reward.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2?utm_source=github&utm_medium=readme&utm_campaign=u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)

# Office Artifacts: The One-Line Placard

A [make.fun](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2) bounty entry: a one-line museum placard for a worn Escape key, catalogued as an ancient artifact of a lost office civilisation.

## The placard

> Escape Key, c. 2005. Plastic, worn lettering. Pressed three million times by clerks seeking exit; none ever escaped. Donated by the Night Shift.

144 characters, one line. The key's own name does the work: three million presses by clerks seeking exit, and none ever escaped. The deadpan catalogue voice — date, material, donor — treats the joke as settled history, and the donor, the Night Shift, hints at who kept pressing it after everyone else went home.

## How it works

`main.ts` (Node 22+) writes the placard to `/output/entry.txt`, validating first that it is a single line of 1–180 UTF-8 characters with no control characters and no trailing newline. It creates the output directory if needed and never removes it.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
