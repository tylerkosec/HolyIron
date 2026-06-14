import { useInstagramFeed } from '../../hooks/useInstagramFeed'
import './InstagramFeed.css'

// To activate live feeds:
// 1. Each artist converts IG to a Professional (Business/Creator) account
// 2. Connect to a Facebook Page via Meta Business Manager
// 3. Create a Meta Developer app at developers.facebook.com
// 4. Generate a long-lived access token (valid 60 days, renewable)
// 5. Paste each token into .env (VITE_IG_TOKEN_KIRA=xxx, etc.)
// Refresh tokens before expiry: graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=TOKEN

export default function InstagramFeed({ handle, igTokenKey, count = 9 }) {
  const token = igTokenKey ? (import.meta.env[igTokenKey] || '') : ''
  const { posts, loading } = useInstagramFeed(token, count)

  const isLive = token && posts.length > 0
  const showPlaceholders = !isLive

  return (
    <div className="ig-feed">
      <a
        href={`https://www.instagram.com/${handle}/`}
        target="_blank"
        rel="noopener noreferrer"
        className="ig-handle"
      >
        <svg className="ig-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
        @{handle}
      </a>

      <div className="ig-grid">
        {loading && Array.from({ length: count }).map((_, i) => (
          <div key={i} className="ig-tile ig-tile--loading" />
        ))}

        {isLive && posts.map(post => (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="ig-tile"
          >
            <img
              src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url}
              alt=""
              loading="lazy"
            />
            {post.media_type === 'VIDEO' && <div className="ig-tile-video-badge">▶</div>}
          </a>
        ))}

        {showPlaceholders && !loading && Array.from({ length: count }).map((_, i) => (
          <a
            key={i}
            href={`https://www.instagram.com/${handle}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="ig-tile ig-tile--placeholder"
          >
            <div className="ig-tile-inner" />
          </a>
        ))}
      </div>

      <a
        href={`https://www.instagram.com/${handle}/`}
        target="_blank"
        rel="noopener noreferrer"
        className="ig-view-more"
      >
        View all on Instagram →
      </a>
    </div>
  )
}
