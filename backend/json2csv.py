import pandas as pd
import os
import csv

def main():
  json_dir = "json/"
  csv_dir = "csv/"
  if not os.path.exists(json_dir):
    raise Exception("JSON dir not found " + os.path.abspath(json_dir))
  if not os.path.exists(csv_dir):
    os.makedirs(csv_dir)
  
  for json_file in os.listdir(json_dir):
    if json_file.endswith(".json"):
      json_path = os.path.join(json_dir, json_file)
      csv_path = os.path.join(csv_dir, json_file.replace('.json', '.csv'))
      df = pd.read_json(json_path)
      df.to_csv(csv_path, index=False, quoting=csv.QUOTE_NONNUMERIC, lineterminator='\n')

if __name__ == "__main__":
  main()