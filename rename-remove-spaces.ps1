Param(
  [string]$NewName = "athlete-hub"
)

$CurrentPath = (Get-Location).Path
$CurrentFolderName = Split-Path -Leaf $CurrentPath
if ($CurrentFolderName -notlike "* *") {
  Write-Host "Current folder name does not contain spaces: $CurrentFolderName"
  Write-Host "If you still want to rename, run this script from the parent directory and pass a new name."
  exit 1
}

$Parent = Split-Path $CurrentPath -Parent
$Target = Join-Path $Parent $NewName
if (Test-Path $Target) {
  Write-Host "Target folder already exists: $Target" -ForegroundColor Yellow
  Write-Host "Choose a different name or remove/rename the existing folder." -ForegroundColor Yellow
  exit 1
}

Write-Host "Renaming project folder:`n  From: $CurrentPath`n  To:   $Target" -ForegroundColor Cyan

# Move the folder
try {
  Move-Item -LiteralPath $CurrentPath -Destination $Target -Force
  Write-Host "Rename successful. Open the project at: $Target" -ForegroundColor Green
  Write-Host "Next steps:" -ForegroundColor Cyan
  Write-Host "1) Open PowerShell or your editor in the new folder: `cd '$Target'`"
  Write-Host "2) Reinstall deps: `npm install`"
  Write-Host "3) Start dev server: `npm run dev`"
} catch {
  Write-Host "Failed to rename folder: $_" -ForegroundColor Red
  exit 1
}
