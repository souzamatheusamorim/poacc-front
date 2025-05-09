import { Facebook, Twitter, Instagram, Youtube, InstagramIcon as TiktokIcon } from "lucide-react"

export function SocialLinks() {
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Youtube className="h-5 w-5" />, href: "#", label: "Youtube" },
    { icon: <TiktokIcon className="h-5 w-5" />, href: "#", label: "TikTok" },
  ]

  return (
    <div className="flex gap-4">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          aria-label={link.label}
          className="text-gray-400 hover:text-yellow-400 transition-colors"
        >
          {link.icon}
        </a>
      ))}
    </div>
  )
}
