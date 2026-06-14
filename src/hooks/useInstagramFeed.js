import { useState, useEffect } from 'react'

export function useInstagramFeed(token, count = 9) {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!token) return

    setLoading(true)
    fetch(
      `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink&limit=${count}&access_token=${token}`
    )
      .then(res => res.json())
      .then(data => {
        if (data.error) setError(data.error.message)
        else setPosts(data.data || [])
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [token, count])

  return { posts, loading, error }
}
