import requests
from bs4 import BeautifulSoup
import json

headers = {'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
           'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Mobile Safari/537.36'
}

def acbaBank():
    sesion = requests.Session()
    response = sesion.get(url='https://www.acba.am/' , headers=headers)
    # with open('index.html' , 'w' , encoding='UTF-8') as file:
    #     file.write(response.text)

    soup = BeautifulSoup(response.content, 'html.parser')
    acba = soup.findAll('div', {'class': 'price-num'})
    
    unkwnowndict = {
        'USD': [acba[0].text, x := acba[1].text.replace('\t' , '').replace('\n' , '')],
        'EUR': [acba[3].text, x := acba[4].text.replace('\t' , '').replace('\n' , '')],
        'RUB': [acba[6].text, x := acba[7].text.replace('\t' , '').replace('\n' , '')],
        'GBP': [acba[9].text, x := acba[10].text.replace('\t' , '').replace('\n' , '')],
    }
    with open('acba.json' , 'w' , encoding='UTF-8') as file:
        json.dump(unkwnowndict , file , indent=3 , ensure_ascii=False)

acbaBank()  

def yuniBank():
    sesion = requests.Session()
    response = sesion.get(url='https://www.unibank.am/hy/' , headers=headers)
    # with open('index.html' , 'w' , encoding='UTF-8') as file:
    #     file.write(response.text)

    soup = BeautifulSoup(response.content, 'html.parser')
    yuni = soup.findAll('span')
    
    unkwnowndict = {
        'USD': [yuni[6].text, x := yuni[7].text.replace('\t' , '').replace('\n' , '')],
        'EUR': [yuni[9].text, x := yuni[10].text.replace('\t' , '').replace('\n' , '')],
        'RUB': [yuni[12].text, x := yuni[13].text.replace('\t' , '').replace('\n' , '')],
        'GBP': [yuni[15].text, x := yuni[16].text.replace('\t' , '').replace('\n' , '')],
    }
    with open('yuni.json' , 'w' , encoding='UTF-8') as file:
        json.dump(unkwnowndict , file , indent=3 , ensure_ascii=False)

yuniBank()


import json

with open('./info.json' , 'r' , encoding='UTF-8') as file:
    result = json.load(file)


# python today web parsing scrapping