npm exec ./node_modules/selenium-standalone start &
sleep 5
./node_modules/.bin/cross-env ENV=test npx wdio ./src/main/config/wdio.conf.ts
npx kill-port 4444