import Image from "next/image"
import Link from "next/link"

interface SaveToPinterestProps {
  slug: string
  imageSrc: string
  alt: string
  pinDescription: string
}

export default function SaveToPinterest({ slug, imageSrc, alt, pinDescription }: SaveToPinterestProps) {
  const pageUrl = `https://www.myeasterntype.com/wellness/${slug}`
  const imageUrl = `https://www.myeasterntype.com${imageSrc}`
  const pinUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(pageUrl)}&media=${encodeURIComponent(imageUrl)}&description=${encodeURIComponent(pinDescription)}`

  return (
    <section className="mb-10">
      <div className="bg-cream/30 border border-border rounded-xl p-5 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-5 items-center">
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden mx-auto sm:mx-0 w-full max-w-[180px]">
            <Image
              src={imageSrc}
              alt={alt}
              fill
              sizes="180px"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
              {"Save This Recipe for Later"}
            </h2>
            <p className="text-sm text-text2 leading-relaxed mb-4">
              {"Pin this recipe to your Chinese medicine or family wellness board so you can find it when your child needs it. Then take our free 5-minute body type quiz to see which constitution runs in your family."}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={pinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold no-underline transition-all hover:-translate-y-0.5"
                style={{ background: "#BD081C", color: "#FFFFFF" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.4 0 0 5.4 0 12c0 5 3.1 9.3 7.5 11.1-.1-.9-.2-2.4 0-3.4.2-.9 1.3-5.9 1.3-5.9s-.3-.7-.3-1.6c0-1.5.9-2.7 2-2.7.9 0 1.4.7 1.4 1.5 0 .9-.6 2.3-.9 3.6-.3 1.1.5 2 1.6 2 1.9 0 3.4-2 3.4-5 0-2.6-1.9-4.4-4.5-4.4-3.1 0-4.9 2.3-4.9 4.7 0 .9.4 1.9.8 2.5.1.1.1.2.1.3-.1.4-.3 1.1-.3 1.3-.1.2-.2.3-.4.2-1.4-.7-2.3-2.7-2.3-4.3 0-3.5 2.6-6.8 7.4-6.8 3.9 0 6.9 2.8 6.9 6.5 0 3.9-2.4 7-5.8 7-1.1 0-2.2-.6-2.6-1.3l-.7 2.7c-.3 1-.9 2.3-1.3 3.1.9.3 2 .5 3 .5 6.6 0 12-5.4 12-12C24 5.4 18.6 0 12 0z" />
                </svg>
                {"Pin This Recipe"}
              </a>
              <Link
                href="/quiz"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold no-underline transition-all hover:-translate-y-0.5 border border-accent text-accent"
              >
                {"Take the Free Quiz →"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
