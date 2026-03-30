import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor, BlocksFeature } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import nodemailer from 'nodemailer'

import { Logo } from './graphics/Logo';
import { Icon } from './graphics/Icon';

// globals
import { Homepage } from './globals/Homepage'
import { Nav } from './globals/Nav'
import { Team } from './globals/Team'

// collections
import { FormSubmissions } from './collections/FormSubmissions'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Users } from './collections/Users'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: process.env.SERVER_URL,
  csrf: [
    'http://localhost:3000'
  ],
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      robots: 'noindex, nofollow',
      icons: [
        {
          rel: 'icon',
          type: 'image/png',
          url: '/favicon.png',
        },
      ]
    },
    components: {
      graphics: {
        Logo,
        Icon,
      }
    }
    // livePreview: {
    //   url: 'http://localhost:4321',
    //   collections: ['pages'],
    // },
  },
  email: nodemailerAdapter({
    defaultFromAddress: 'noreply@jaydot.org',
    defaultFromName: 'No reply',
    transport: nodemailer.createTransport({
      name: process.env.SMTP_NAME,
      // host: process.env.SMTP_HOST,
      // port: process.env.SMTP_PORT,
      service: process.env.SMTP_SERVICE,
      auth: {
        type: "OAuth2",
        user: process.env.SMTP_USER,
        clientId: process.env.SMTP_CLIENT_ID,
        clientSecret: process.env.SMTP_CLIENT_SECRET,
        refreshToken: process.env.SMTP_REFRESH_TOKEN,
        // accessToken: process.env.SMTP_ACCESS_TOKEN,
        // expires: new Date().getTime(), 
      }
    })
  }),
  globals: [Homepage, Nav, Team],
  collections: [Users, Media, Pages, FormSubmissions],
  editor: lexicalEditor({
    features: ({defaultFeatures}) => [
      ...defaultFeatures,
      BlocksFeature({
        blocks: [
          {
            slug: 'floatImage',
            fields: [
              {
                name: 'image',
                type: 'upload',
                relationTo: 'media',
                required: true,
              },
              {
                name: 'float',
                type: 'select',
                options: [
                  'Center',
                  'Left',
                  'Right',
                ],
                defaultValue: 'Left',
              }
            ]
          }
        ]
      })
    ]
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [
    vercelBlobStorage({
      enabled: process.env.NODE_ENV == "production" ? true : false, // Optional, defaults to true
      // Specify which collections should use Vercel Blob
      collections: {
        media: true,
      },
      // Token provided by Vercel once Blob storage is added to your Vercel project
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
})
