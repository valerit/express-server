import mustProvide from './error';

export default function getConfig(value = mustProvide('value')) {
  if (value.toUpperCase() !== value) throw new Error(`The environment variable ${value} should be upper case`);
  return process.env[value];
}
