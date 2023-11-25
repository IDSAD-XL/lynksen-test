export function splitTextToLines(str: string, wordsPerLine: number) {
  if (!str) return []
  const words = str.split(/\s+/)

  const result = []
  for (let i = 0; i < words.length; i += wordsPerLine) {
    const line = words.slice(i, i + wordsPerLine).join(' ')
    result.push(line)
  }

  return result
}
