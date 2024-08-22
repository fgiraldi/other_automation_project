param(
    #File path of downloaded installer
	[string]$FilePath = "C:\Users\Administrator\Downloads\guardian-browser-x64.exe",
    #Location of installed Guardian Browser
    [string]$LocalFolder = "C:\Users\Administrator\AppData\Local\Programs\guardian-browser",
    #URL to download Guardian Browser. This parameter is Mandatory
	[Parameter(Mandatory=$true)]
	[string]$myDownloadUrl
)


#Remove current version of Guardian Browser
if (Test-Path $LocalFolder){
    try {
        Write-Host "Removing files from $LocalFolder"
        rm $LocalFolder -r -force
        Write-Host "Folder $LocalFolder it's now empty"	
    } catch {
        Write-Host "Error removing all files from $LocalFolder"
	    Throw "Error returned $_"
    }
}

#Check if installer exists in given location and removes it
If (Test-Path -path $FilePath -PathType Leaf) {
    try {
        Write-Host "Removing downloaded file from $FilePath if exists"
        Remove-Item $FilePath
        Write-Host "File removed"
    } catch {
        Write-Host "Error removing file $FilePath"
	    Throw "Error returned $_"
    }
}

#Download installer from given URL
try {
	Write-Host "Start download of $myDownloadUrl"
    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls, [Net.SecurityProtocolType]::Tls11, [Net.SecurityProtocolType]::Tls12, [Net.SecurityProtocolType]::Ssl3
    Invoke-WebRequest $myDownloadUrl -OutFile $FilePath
	Write-Host "Finish download"
} catch	{
	Write-Host "Error downloading the file"
	Throw "Download returned $_"
}

#Execute installer and wait for it to finish
try {
	Write-Host "Runing file $FilePath"
	Start-Process $FilePath -wait
} catch {
	Write-Host "Error installing Guardian Browser"
	Throw "Aborted $FilePath returned $_"
}

Write-Host "Finished installing Guardian Browser"

#Close application that opens once installed
Stop-Process -Name "Guardian Browser"