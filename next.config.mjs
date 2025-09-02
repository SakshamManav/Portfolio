/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["static.vecteezy.com", "cdn-icons-png.flaticon.com"],
	},
	async headers() {
		return [
			{
				source: "/files/Saksham_Resume.pdf",
				headers: [
					{ key: "Content-Disposition", value: 'attachment; filename="Saksham_Resume.pdf"' },
					{ key: "Content-Type", value: "application/pdf" },
				],
			},
		];
	},
};

export default nextConfig;
