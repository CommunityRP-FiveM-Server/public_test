fx_version 'adamant'

game 'gta5'

description 'ESX Shops'
lua54 'yes'
version '1.5.0'
legacyversion '1.9.1'

shared_script '@es_extended/imports.lua'

client_scripts {
	'@es_extended/locale.lua',
	'locales/*.lua',
	'config.lua',
	'client/main.lua'
}

server_scripts {
	'@es_extended/locale.lua',
	'@oxmysql/lib/MySQL.lua',
	'locales/*.lua',
	'config.lua',
	'server/main.lua'
}

dependency 'es_extended'
