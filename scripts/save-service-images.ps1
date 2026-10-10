param([string]$ManifestPath = 'scripts/service-image-manifest.json')
Add-Type -AssemblyName System.Drawing
$manifest = Get-Content -LiteralPath $ManifestPath -Raw | ConvertFrom-Json
$destination = Join-Path (Get-Location) 'public/images/services/photos'
New-Item -ItemType Directory -Force -Path $destination | Out-Null
$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$parameters = New-Object System.Drawing.Imaging.EncoderParameters(1)
$parameters.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 85L)
foreach ($entry in $manifest.images) {
  $bitmap = [System.Drawing.Image]::FromFile($entry.source)
  try { $bitmap.Save((Join-Path (Get-Location) $entry.output), $codec, $parameters) } finally { $bitmap.Dispose() }
}
$parameters.Dispose()
Write-Output "Saved $($manifest.images.Count) service photographs."
