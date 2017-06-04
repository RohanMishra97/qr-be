import pyqrcode
import sys

url = str(sys.argv[1])
urlname = url.split('.')[1] 
qr  = pyqrcode.create(url, error='L')
qr.png('QR/'+urlname+'.png', scale=6, module_color=[0,0,0,120], background = [0xff,0xff,0xcc])
print (urlname+'.png')
sys.stdout.flush()
