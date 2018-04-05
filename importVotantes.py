from pymongo import MongoClient
import codecs

def main():
	try:
		client = MongoClient('mongodb://localhost:27017/')
	except ConnectionFailure, e:
		sys.stderr.write("Could not connect to MongoDB: %s" % e)
		sys.exit(1)
	db = client.Padron
	with codecs.open("./files/PADRON_COMPLETO.csv", "r",encoding='utf-8', errors='ignore') as infile:
		for line in infile:
			line = line.strip().split(",")
			user_doc = {
				"cedula" : line[0],
				"codelec" : line[1],
				"sexo" : line[2],
				"fechacaduc" : line[3],
				"junta" : line[4],
				"nombre" : line[5],
				"apellido1" : line[6],
				"apellido2" : line[7]
			}

			db.Votantes.insert(user_doc)

if __name__ == "__main__":
	main()