export const ANSWERS = [
  'apple', 'beach', 'brave', 'brick', 'cabin', 'candy', 'chair', 'charm', 'chess',
  'chime', 'cider', 'clean', 'crane', 'cream', 'dance', 'dream', 'eager', 'earth',
  'flame', 'flute', 'fresh', 'giant', 'grape', 'grass', 'happy', 'heart', 'honey',
  'house', 'ivory', 'jolly', 'lemon', 'light', 'lucky', 'lunar', 'magic', 'mango',
  'maybe', 'medal', 'melon', 'metal', 'night', 'ocean', 'olive', 'piano', 'plant',
  'pride', 'quiet', 'radio', 'river', 'robot', 'round', 'sheep', 'shine', 'smile',
  'spice', 'stone', 'story', 'sugar', 'sunny', 'sweet', 'tiger', 'toast', 'today',
  'touch', 'train', 'trust', 'under', 'vivid', 'water', 'whale', 'world', 'write',
  'zebra',
]

const EXTRA_GUESSES = `
about above adapt admit adopt adult after again agent agree ahead alarm album alert alien align
alike alive allow alone along alter among angel anger ankle apart arena argue arise armor arrow aside
asset audio avoid award aware awful bacon badge badly baker basic basin basis batch begin being below
bench berry birth black blade blame blank blast blaze blend bless blind block bloom blowy board boost
bound brain brand bread break breed brief bring broad brown brush build burst buyer cable camel carry
catch cause chain chalk chart chase cheap check cheek chief child chill choice chose civil claim class
climb clock close cloud coach coast color could count court cover craft crash crazy cross crowd crown
curve daily dairy dated dealt death debut delay depth devil diary dirty doubt dozen draft drama drawn
drink drive eager early eight elbow empty enemy enjoy enter entry equal error event every exact exist
extra faith false fancy fault feast fence fewer fiber field fifth fifty fight final first fixed flash floor
focus force found frame frank fraud front fruit fully funny given glass globe glory going grace grade
grand grant great green greet group grown guard guess guest guide guilt habit happy harsh haven hence
honor horse hotel human humor ideal image imply index inner input issue jetty joint judge juice knife
known label labor large later laugh layer learn lease least leave legal level limit local logic loose lower
maint maple march match maybe mayor media mercy merry meter middle might minor minus model money month
moral motor mount mouse mouth movie music never newly noble noise north noted novel nurse occur offer
often order other ought paint panel paper party peace pearl phase phone photo piece pilot pitch place plain
plane plant plate point pound power press price prime print prior prize prove queen quick quiet quite
quote raise range rapid reach react ready realm reply right rival roast rough route royal rural scale scare
scene scope score sense serve seven shade shake shall shape share sharp sheet shelf shell shift shirt shock
shoot shore short shown sight since skill sleep slice slide small smart smell smile smoke solid solve sorry
sound space speak speed spend spent split sport staff stage stake stand start state steam steel steep stick
still stock store storm story strip stuck study stuff style sugar suite super table taken taste teach teeth
thank their theme there these thick thing think third those three threw tight titled total tough tower track
trade trail trial tribe trick tried troop truly truck tuneup twice uncle under union unity until upper upset
usual valid value video visit vital voice waste watch wheel where which while white whole whose woman women
world worry worse worst worth would wound wrist wrote wrong yard yearn yeast young youth
`

export const VALID_GUESSES = new Set([
  ...ANSWERS,
  ...EXTRA_GUESSES.trim().split(/\s+/),
])

export function getRandomWord() {
  return ANSWERS[Math.floor(Math.random() * ANSWERS.length)]
}
