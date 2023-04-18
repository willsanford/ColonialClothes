module.exports = {
  reactStrictMode: false,
  env: {
    'MAPS_KEY': process.env.NEXT_PUBLIC_GOOGLE_MAPS_TOKEN,
    'OTHER_THING': process.env.GOOGLE_MAPS_TOKEN,
  }
}
