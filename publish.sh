rm index.zip 
cd js
zip ../index.zip * -r
cd ..
aws lambda update-function-code --function-name practiceHeroFunc --zip-file fileb://index.zip --profile=soravis