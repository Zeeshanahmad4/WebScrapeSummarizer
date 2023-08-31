<?php
function writeToCSV($data, $filename = "output.csv") {
    $file = fopen($filename, 'w');
    foreach ($data as $row) {
        fputcsv($file, $row);
    }
    fclose($file);
}
?>
