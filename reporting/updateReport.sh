#!/usr/bin/env bash

cd C:/Users/Administrator/repos/proctoru-test-automation

if [ ! -f report.log ]
then
    echo "report.log does not exist. Creating..."
    touch report.log
    echo "...created"
    echo "Report Update Times" >> report.log
fi

echo "Getting time of last results..."
OUTPUT="$(aws s3 ls s3://qa-procotoru-testresults/Reports/results.zip)" && echo "...time of last update fetched."
OUTPUT="$(echo $OUTPUT | cut -c1-19)"

LAST_UPDATE="$(tail -n 1 report.log)"

if [[ $OUTPUT != $LAST_UPDATE ]]
then
    echo "Report out of date. Updating..."
    echo $OUTPUT >> report.log
    aws s3 cp s3://qa-procotoru-testresults/Reports/results.zip results.zip
    echo "...updated."

    echo "Stopping server..."
    taskkill /im node.exe && echo "...results server stopped."
    echo "Restarting results server."
    npm run remoteReport

else
    echo "Report already up to date."
fi

echo "done"
