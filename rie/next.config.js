/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      // For loading video files
      config.module.rules.push({
        test: /\.(mp4|webm)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next',
              name: 'static/media/[name].[hash].[ext]',
            },
          },
        ],
      });
  
      return config;
    },
  
}

module.exports = nextConfig