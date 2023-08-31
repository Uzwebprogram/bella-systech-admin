echo "Switching to branch saidbek"
git checkout saidbek

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* root@138.197.16.184:/var/www/bella-admin/

echo "Done!"
