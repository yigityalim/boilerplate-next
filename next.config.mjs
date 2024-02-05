import { withContentlayer } from "next-contentlayer"
import "./env.mjs"

/** @types {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['lucide-react']
};

export default withContentlayer(nextConfig)
