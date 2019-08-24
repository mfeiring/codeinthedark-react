export const EXCLAMATIONS = [
  'Super!',
  'Radical!',
  'Fantastic!',
  'Great!',
  'OMG',
  'Whoah!',
  ':O',
  'Nice!',
  'Splendid!',
  'Wild!',
  'Grand!',
  'Impressive!',
  'Stupendous!',
  'Extreme!',
  'Awesome!'
];

export const POWER_MODE_ACTIVATION_THRESHOLD = 200;

export const MAX_PARTICLES = 500;
export const PARTICLE_NUM_RANGE = [...Array(8).keys()].map(k => k + 5);
export const PARTICLE_GRAVITY = 0.075;
export const PARTICLE_SIZE = 8;
export const PARTICLE_ALPHA_FADEOUT = 0.96;
export const PARTICLE_VELOCITY_RANGE = {
  x: [-2.5, 2.5],
  y: [-7, -3.5]
};

export const PARTICLE_COLORS = {
  text: [255, 255, 255],
  'text.xml': [255, 255, 255],
  keyword: [0, 221, 255],
  variable: [0, 221, 255],
  'meta.tag.tag-name.xml': [0, 221, 255],
  'keyword.operator.attribute-equals.xml': [0, 221, 255],
  constant: [249, 255, 0],
  'constant.numeric': [249, 255, 0],
  'support.constant': [249, 255, 0],
  'string.attribute-value.xml': [249, 255, 0],
  'string.unquoted.attribute-value.html': [249, 255, 0],
  'entity.other.attribute-name.xml': [129, 148, 244],
  comment: [0, 255, 121],
  'comment.xml': [0, 255, 121]
};
