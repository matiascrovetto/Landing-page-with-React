import './App.css';
import Nav from './components/Nav.js';
import Jumbo from './components/Jumbo.js';
import Card from './components/Card.js';

function App() {
  return (
    <div className='bg-body-secondary'>
    <Nav/>
    <Jumbo/>
      <div className="card ms-5 d-flex flex-row" style={{ width: "18rem" }}>
        <Card 
        cardImageUrl="https://fotografias.lasexta.com/clipping/cmsimages01/2022/08/09/3FFA8546-05CE-4608-9B69-6602D02A4C58/cachorro-pomsky_98.jpg?crop=1183,666,x0,y103&width=1900&height=1069&optimize=high&format=webply"
        cardTitle="Dogs"
        cardDescription="Dogs provide us with a sense of emotional well-being through the unconditional love they give us."
        cardLink="www.google.com"
        cardButton="More information"/>
        <Card
        cardImageUrl="https://static.fundacion-affinity.org/cdn/farfuture/hHjlkRJJ0mnR1zVGzWk-SEX1BpGXvE56GGuN6h89MWM/mtime:1528830329/sites/default/files/descubre-como-se-comporta-un-gato.jpg?itok=n2kVSTSl"
        cardTitle="Cats"
        cardDescription="
        Cats are very affectionate and have a great character, but we also value their independence."
        cardLink="www.google.com"
        cardButton="More information"/>
        <Card
        cardImageUrl="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxQUExYUFBQYGBYZGyAaGhoaGh8cHxocHyAfGhkfHxofHysiHxwoHyIhIzQjKCwuMTExISE3PDcwOyswMS4BCwsLDw4PHRERHTApIikwMDIwMDAwMDIwMDAwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMP/AABEIAK4BIgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgQHAAIDAQj/xABCEAACAQIEAwYEBAQEBQMFAAABAhEAAwQSITEFQVEGEyJhcYEykaGxBxRCUiPB0fBigrLhFTNykvEWU9IIJFSi4v/EABoBAAIDAQEAAAAAAAAAAAAAAAIDAAEEBQb/xAAwEQACAgEDAwMCBAYDAAAAAAAAAQIRAxIhMQRBURMiYYGRFDJxwQVSodHh8CMzsf/aAAwDAQACEQMRAD8AsTF2rTtJiRQ9OJ27N0W2Jg7EGY66dN68tfxGA2EyaXe2mNW3eQD4QIbLE+o8/XeuBjzW9VKmztQw6nodvYJcRvPYxq3buttxCvyPl5Hyo/hsYbt0FPhjWlixxViVw94WzbYAoCD4lPwsJ1mNdNRrRW3fa2GtICpjQqfEPPxaT5UWtxnSftbv5sRkwSpcf4Bn4lY+xmW2yd7cGqpspb9IPX0260ncH4wRjbFx2AZ7izGipaXwqEGwUmTp0nnRbjuCW3ZfE4gtLsbSpAzzBzAMR4ZUHxCYXaZqvTiWa+GIAEgQNAqiAFA6BQAPSt1qSszuKUXE+m73ELapnLCImoFjtPYbSaWcDi7IsIZGwrfDFWuLkiDy8q0RyOSsyET8YONWXwNy3MkxA8wQa+f7erVb/wCM+B7u2jjYmD96qNSCwjQzRx5YF7sP3zeeyLWdsg2EmPlUnsPYNnFBtfgYfSguJ4hcUCDArvwLGu12GMiDPntVN1Bv4Dg1tY4Y/iTd23dxlaRIGkc6ApijtNH8fhbj2pQQI/vSle/w+4Gkb9KwbS5Yblqe4WtXRlk1J7G8PFzEd8wlLRza7F/0DXSefsOtDLOHaADrOkD+lPOGWzhsOLLqASJbzY6nQ+w9FFFBblqKb2I/FA2eBAZidoiZza/4pI3qPxe22HUljDaRpBJOvTkZPtFemyHbODAM8xsNhO+8ncVP4Lj1vOmHvYdr6fCizLK3PKxIYLG4zQAAYpWWWqdBt0IV1YmBXljD5jNXLifwwwTDwi5bJ6PmH/7TPzpO7Rdh7uEIaQ9omA6giPJl5H5ii9yWwihV/JyedbYgMBAmia2MhmfauWOx6Bdx50MIuT3IB9Y1r0PAiudzGBz4RUTEXKPQ7ohZ/wCBTTexPTIn+pqteqh/+n95vYr/AKLf+p6t6tMaSohlZWVlFaIZWV4TQLi/bDD2Bubh6IJ19eftNXZaTYerKT7fbti2uFbL1zqD8jFMHC+N2b48DQ3NW0I/kfYmqTTLcWghWVlZVgmVlZWVCGVleTWVC6K4w/EbhlkpT7S4gs5JM0e4HdPdt9KU+MXZY6868902NqXwer2jJtIKYbtNctYdLq2le6pNkXJAdEAUgAFTmHnpyGtMfC+IYi6pBgXAOpgkalYnzpd7DjOl1SgYIC3XUrmWB/1Wx8xRvgna2yl38i6XPzDOEZgsRcJ8Tb6idR5V01j18djk5p6ZOgf2yuYi5gFbEFMy3vCqBhCFWAJLbmQRypAskA1cvb/huJxOFS1aRM3gLqXAJIBLBTt8UbxpNVva7B4/NrYjzLpH+qjbirTZiknLsFeDoCoJbSiuHYq6lHgA1rgeyWJCQVUH/rH9a8/9P4pJJttHkQ32JNDjye2rFxhJPdAr8VuKtcRLZIImdDNV4MAd1mac+NWWuNldTI5RH0NATfKkjIZFPhlk1sjFOTUtiHjcKco01rnwGyRdMjka7DGl50oj2awq3b4U/tJ+Qo3KSg0/AcJLhhfDcbZUCxrEA1F/NZtTvRLiPAgAApgUH/LkNl1kmB5nYCsWz2GJWHeyODN273jDwWyNQN3PwjXTQS3yon2iIZt9fScu4EGNoorZsrhsLbWNcpJYc3b4j5xsPKlPF3FJGVtSdCrGTrty9K0SSjD5HQWx5Y8LQSIggQI9yNpjnTz2I4O9q1cxTLBKEWgdwu7N5TAA9+tAeynC/At+4hhpCMR4RupI6sSD6aVaGBNsWVQaDKNqLHgVa5fQHV7rYl4fiOKvMBbxGUocxBAIcERlOnIwdDW3afiN38neFxwzgWzoIB8cacxPTXamTE8MG9sgGNdhPyqJxHs/buWSlyGNyADMMIltJ3jpzpCjPXpq9uTTmlCVyiqT7FLcQ4q20xQrEsH1Jmi/GOFMl1rTbqd+o3U+hEH3qL+QA0NFGSjzyYnZEsABajYi5qBvNEbXD51kx9q5/kYcTTVKK3YUa7j1+CF3ubuIZ9AyIB7Fv61aa8at9aqHgKKk5eYFFu/6TQ675GR3RZf/ABZOv9/OtjxNIJnQCTVcW8Weppi4fbItKST4tdNddxI6AfWaiaYWlHvH+KlwS5K2xsnXoWHMnku3rSljr1y4Rm8K8hu0fZfrRe9bzt3j6j9EbAc2I5E8ug9aEY69lJO3rV3TGwjXIGu96rm2jiN/HOs16bN8AReWd9iKhY3H97cYWszOnQTMg79PehR4tfUwwYEbjcj5UaUinpZZfZbttetkJeY3EBhp1ZfMNuR5GrEtY9GAZWBBEg+VfPvB8bcJdypZoiBvv08qdOAcaz2yEb4eWx8xHX/eildCqRZxxyda9GMXqKrduJvPxGu1riD8mNKtl6UWH+aXrWUh/m3/AHVlS2XoYIw4e3hi3Okm+5LH61btjs2oTI7EjnNe2ex+GUyEE1lUFDudSfVxV13FPs264FLQcfxL7ZmH7UAOSfXU0Mv3bBx/5lQ0oQxH0nNP9ajdrb7XMe8N8DkabDLoP6VmJw6gF1nO+/QfTahU3Gt+ReSKbTHXg3aj83cuFduQnpptGn151LvcRZCyzp+n130+vOq57IcV7q8EJymeuk86f+OAPYN0QDEH3Hl51lzxksj+4+Kikl2OVjjTkwSdOp06b/Sp1vjKMNWCmdZ+3rVdHiNxSMuxJkTsdjy11ohw65cvMVS2XfygDedT09aF45oJ6GOFziNtny3AHA2YjUf5uXQj0r252fw16SqLJ32nX03FBcRw3FqoXuQ6nlbdAVPWGgE+hNROH8auo4Rm7t1/Q6BW36cx5ijhPLBfAjL02LKvkPL2Kw+XLkFCOM9lLOGtPctaPIAPQEiaa+HcS71JBGYDUdeunI0D7Ulzh3Zv3L8prXHM5x2XJxs2J45aWhRtW7hOrc+dHuD8IAcX9SUBKaTJ69NPvFLNrE3M+mvIDryAp5uXXtWQvxFQFiNJ5meYBnXzpuHFUtTBxwdgvtLjHyhiNSPD5RpJkwOp+lLNwE/EQcshfU7mfT+VFeM8TS5Izy05SDII5mIHrv8AzpetHKI1jzqZX4NE3UR4wK5sLhSGPgzLlG0ljPvNF8Pi71tCxkga+3Sk7spxP4rE7nPb9eY+x+dN6YiUkHRh/wCaKOb2uLGQinFNG1jtSI8QJboKJdl+Nm8758sLGURqJknX2+nlS1bwABnTUzPSo/Bsd3OMyz/zTof8Sax/mTOv+YUzHkSaaDli2ZK/FjhIt3bN9fhcFSOhU5vrmPyqvuI3YM1af4sODhLXOLsD/seftVT4mzmFKy16jfkxNUzMHiNdTpUrEMGG+vKonD8AWMUVbgbqJPzoWrexG7Nuzt85nBPIUb700F4HhsrvPQfejdm0WMKJPSgk6dDIcBPs9gu+ueL4F1J6nkKN4zCIRuyiDAVioE7mNqBXu0FnD5MO7HO4gFFzAGTvGvqRU67fcqTbYFiABBBgc/CSCNau9JphBkbtM985baFAbnhGmoA1JnWRAOtJmKwl24HuM5YW2y5B4QYAJmN9xtT3dVu8DnQIp1PVhGx5xNAUe1ZtXWuOih3JALAE6AbE07HLwSUXdHDg9621v+EgX9yCNG8zz8m50LxXCHOKFzD/ABIczzoADIIJ5TrpqaXOJcZKtNkkGT4wSNPIf1/3pg7IuPyl5XcnvfESCc4ceE677az/AGXSWlarBX8pN4RwZ0e5eDrldz4Z+EnWDpE17eMXUe2YbxExu2WIBH09xW+DtG1bGY/EQ0sT0AA31OgO1KWI4hct4y4ymJaCDzOk/Wqxy1NlSjxQ/K0iRz1re25Fc+BWjidEDCNxGg8g23tTLheynWapRvgBqgF+b9Kym7/08nT6VlTQyEoPoJrtYiN6DWr+aCTBFSExa8jXHhnTldKvnkjRXfbbh3ccQe6dLd1cwPIts09IOvvUSwGde8AOUMVJ/STppT72t4eL+FcaSozKTy5H+/KuPZTg4XCi0wlbnjPodF+kGnSlrjq+g95LSZWHHE7q6t5dpGZenQ7c6d+z3ERiMM1okKSpK8gCDImhnHuyztiTa3UAyeq8p+h9qGY11wKIqsxcn4N4HUjpNHJLLCMV+YdjyVyQ8RdKEjKsjQ5oiR6c/TpTX2ftth7cuPFc1Y7azoBrsBSHavXLtxXOyupOkASdeUU8doyxBU6Dlvp9elFmhsov6jI5E2R8V2sbNAua6kbn+W/lRjDcYt30AuqHjYkDMPMHkKq7ilp7bZjr/entEUQ4bxHw5sy5hHMj2y7HrVT6KOhOAcc/uqRYOGAsXA6HQ67AHSNJoh2vxKvgy6bFl25Gdar27x4vA5bH1G+3KjfDcUXsPaVWzMywkzrOhGnT+tLxYp437u4vq1DJBtco97J8O7zEC40ZLfjM82/QPnr7Uf4kA0alwNWbYTtrl0kdPSiXCbVvDW1Q67s7HQE6Tv8AQeVD+L8esXEYWbU+LxHLvMgx77mPnNdSEdMPk5kdthKxGEzXXIbUE+xoZjiVMfWnO02Ew9oPiWVc5IAXU6AkAxryI1jcRUfh1/DXSXFlBC5odwyqOpkBiSOUx67lawyb+CpRlJ/AoYZmBGQlSNiCQZ8iKbeG4XE28KGUzJlQ4gWwCQcx3AgTtpp1ovZ4pg7RlFtqSTrbQD55f50H452rFtgxOoBKDUZgYk/TTzij9FLncPHCSdoJ3MVlyo9xs7MqFUUELm0BYmIHkCWiJAmBE43hjby3F1KkMD5g6R6xS7xDjC3EyoQLdwyCpgqZDGS36pA3o5grRawveXO8bJmDpz02nn6/as+VJJadjZCTYT/EPHG9hcKVHguFrhPMMBBEf5zSVhl5UynEi7wvDH9rZdeRyQw/7lNL2GtyxHKaVNtr+n22OfmT17G+CuhXHr86Nfng4gfWgmMwxUSP/FRcHjWB61Iylp9osYeHWSbjyRqBHzqXxN7wQjDjKdDqdT116UvcP4qQ7k7QB9an/wDHJWfvr9KdCK03Lk2YI3Gznw7hVxHN69D3D0Oiz00386Ifn3TXLtOm4NR7GPYqCVAJPr6GvfzJuOqIA2bqxH/gc6OSUlTHbrc2/NHEHIiMCRJJMAAaEsdgAaE8Zw1i3/CWGZWi45+JjuepC6wB/PWivFsaqL3VsKwYEMT4SxmAfIDWF853pUe8CDacknMdRuZ1kk6k8qCEErovVJ7Ec4W3JzsAOXM1oL6JKpcdVO6jn713ThNozDP8xWzcEQRObyk1oST7sptp8HFuJjKFFxxGxOsemtc34U3hKNnDazEEHfWaILwJQZA19SfpNSkwLDbX6Va24AdskdnuMXLF3Pb7yFOoJkG5sZk6qdNNverh4B2lt4i3rCXABnSZieanmpqj3uG0SGBCk5id1PPU8piiGA4r3dxXQsqxqNpJ+Eeh8vLype6e5Uo2Xj+ZT9wrKqv/AI3f/cKyj1onpSHCzhNZOxqcuGUCFH0qPcxCwANiN+lb2bpA01rh1jh7Y8d+7Eamza5h/wCG68spFSLUIqINgoA9hFC+IcTZLdxnUhVUn2AoHb7b2XtKA8FgQTExBKfPSfetEHqjUeF8BKGrYYMXcN4sLQEgEZ2GhPITzE1TnaHB3reIY4gHMTqT9I8ulXlwvB5LYG2kxzB86H9sey1vGWulxR4WP2PlTsU9LstTSdFPX3C2p0gUe4hxYsX1nxHUbgTpt0oZxLhL2w1u4pBXTX71C8Jv+L9RH1HOjSU0NU6ZyxGMQ5luqTGzA7jqORFcE4RbLA954flR7tJwwlfh8QEowjXygClVsUMsDQjf2p+JuUfZt5L1LiW4w/8AClUqyMyz8QI0J8iNJo52MxXdYnKToUZgDvMAGDoJ5e9JWF4rKZWnSNQY+ZmjfZ3ioW4xzFwFJXaZJA589YqvTkmnLcY5xlF6fA49ouOQAFOVANQQPHrE9BBEkaE6T5Al4lZVRdEljtHOToCYM9NfPTWhPE7tx7hzHMvTcRGg02jT3NQUwqqTmJOswD4Rz61bkmZJuMFucuLcWfEXywRsgOUKgOh5xEjMdfaswuLe6DbtIQTO7SMp3zZiZNFMLdQrl0joOX+/nQtrPc4wKikZh8I10YSBG/tvRxy6k0lTS2FRyOnsTjw29lgui9cgkn1kV24gveW0tMoCWxGo8ZbQk5omDr+r2rPzDk7ac6m5rbwGYjTpWb1sl7kjklLkXMZZQIyoInb21rnwHjtyy2VYKsdQeU6GOn+1MGN4ZaEHvIPIEfc8qV+IcPK3AB+o6a9dq045RmnGQcNUWMWAxj/lzYH6Lpf2ZdPrmrbDYgofEKg8Pvd21wPo2Uq4P6XtnUH2zUWsW1urtrSMr0bg5V7rOty+GBoBjb0MctT8ZYyiOU1DVBzFLx1+YWaYOTLHQHSpPrWljYjprW77edFJ2zp9Mrxo9F5utFsHizZw73gWzM2QAchGaZ65sp13AoKNtT51KsXEaybTkjxh1O+sRt7ConTsdkjtQNx3EDlUCCx1Lbmep9da4WAOfvP863xGHAPv/ftW1u0QYrRtWwEY0FcDgnZAyoTIZtI2XRj8+W9eNdjU+nv9678I4z3VkoFGfMGDfcEcx5edD7l3NJbck8onWNvrVP4Irvc7fmjtz+1dhe21j6z/AL0OL849/wC96JflR+W7wEZu8gyeUCABtzB9qqmW3XJ7duKwynX16f0oSLRW6UVvAQASTIA1MGNY9piuoGXeZO5qOrHNB/TtpqefXkZ+tHCWrkVkjStDTntf+/8A6v8A41lAZ/w/f+le0WhGfWy08PxHD/8A5FrTabi//Kp1jimGnMt+0PLvF/rVe2MIOlSDhwK5yxRW4mdodcffw91Lim/bJZGUfxFAkgjrFUvgcFilKItp1YPALLCSToS5GXf9UxHOnRDFd793wb8xrToZNCdpMvHdj538DRg55kEEddxWo4tbBKtdtqJ1zOsg9InSgnBbngVA0g8+o5a/1ofjsNmu3D1dvuaxxwb3qdeC8kNKsM8Vt4bEyHuWgR8Lh1n760m2uGqjXYe3PwhnCwY1EZtCD5Ubw+BHOofFMGOlMx0trAjOuSPh+J2DaUlCjAeJZ02ggCZ86r7j+Hlyyjc7Af0o/jAZIqHcwROs1oxS0SsuU2xYGGf9jfI0S4VYIPiIE6GSAR0aCZEUat4WNtag4yyACa0/iNftAUtNs58X4xlfJaMoNzzY6Tr0rXC4rMN58hrQW+ZY+tT+BLLNTXijpBl73bJPeuDoreZANF8LdBuLfZmzAg6k6wAOevID5+URlHxVuV/hmkzVflIrTtM7tjMxYndiSeknU1EOJYNO3t/UUJxmOggCo9zHsaKHTLllboZrL5zJI9zXe+tkMtxigKGR4hAPKevpSlZ4g68653sUzbnSj/DJbpl3Kw/xjFW+9t3A6tmXJchgdQMmY680j1IPWpOE4gibOn/cP60oVlXLp4ySTfATk2NPEOIK2ouL6Zh/WoZxq/uX5igU1lRdPFKihp4bc7ycokjpr9q6v4R4tI66fetPw5UG7dB/YPvRbtNwkHMeUVmyRUZ0acfUvHGkgOmIQ7OpPSR/WuhMCToOp0HzNDOE4Mh5GutOtnALdt5WEDnQ5IxjKkG+sk+wrjEoSPGu/UHfynWul64FgsQp5ZvCTRpuxtstmDbGRXPtD2XvXUUWkzMOZZV+rEVcXGUlFX/Yr8VLwA1xK/vSd/iHy3rdmAA8S/MV34d+HvECxIw5YATKshH0bfyoJibxW4UcFSpggiCDsd6e8W9RL/Fy5oKFky+3X33qVgeKKEa0biBGIMEqQGGoJO4GkaeVDO9t5YLCtCqeEiPKgS82U+rbXAQx7gaSp3grqD78/WoOExADyzAabkx6e9TnsE5eVDu0NpQB+6piknJRBl1UpRqgh3lr/wB1f+8f1rKVsh6VlatAnWWzZSBWXG5V1Yaab1Dxl0WxJ1PTp6n+VcptId0/S5uolpgr/b6kXE46HFtYk7++1OvZ+6EsjvUQASSWAEL+kmdjH8qq+7cYsXX4iZ/nRPC9rGyradXlP1rqeksJMiDqINZup6WWZJLi9/J3uowx6fp1FRV+a5deRv4p2xshlFm0hVSZOgB9MvXfUVpguILdkiQdyDynz50j3sTbd7htrCljAVhoPQkEeXSm3sag7ruWIN0mVdtCZ/Qx5+X+9diHRY49JWONyXG+/wBTx7y5Xm9zqPitvoFjdqNjLRZa6Yu4tr/mstuNDnYLHzNQ37SYSI7+2eWhzfafnXNw45tvZm5JRVsDYrAHXSozWIGvKmTFJp5UH4kBEDnRydIjakCjchTQ3iFuLc9SKJYqzA19aFcSufwmPmAPnV4V7l+oM41Fi3e+I+tSOFXCLg864YhYPrUrgOHNy/atrMuwXQTE6THON66r3iLXAewtuZqVewjd2xCkgbmDA3Op+dPlvsHaAXI9w7ZmJUCOoEfzovh+zy2gqgPk3ZswOaY0KgbaafekVsMUH3KY4X2Wu3riZpRXfLoJcaSDkJBC6jUx1E00YP8AD233Xd3Yt3ZIZmL5gVMyE0BBXTQNyNNz4FLZcKrFT4mUMM41H8XNqRpOhEESYjbZHuKM1t2uYcFUZbwDZG3h02g6ZXXTWOVN9zCUUhcxn4Y2mDBPAzEZTJKjKIYBsxBDb82B6Ck7tH2Lv4cswUm3nCp+pmDEgHwrG4jlMiAata4922BdQKbdwk3LYWUDAgBWExDAgjoWPSpCPDC2wJt3ADaLkQA36TzIBGX/ALTV1JAto+frtsqSGBBBggiCCNCCOtc6tjtj2At3l7zDZUuAM7W41dm1AksI1BGo0M8oiq71pkYqwKspggiCCNwR1okwDnWVlZVkGbsDcC3bk/tH3otxfENdYqNRQrsBhw9y5PJR96ecTZUAQorn9S0sl/oQSOHWGsvmMxzpptY0MNNvSvbeC3zAFTWy4MRCDyFJc9TIM/ZzFYF7KB0AuC4tp2LHd2hDG2u3tXnbLiHC8G/dFXuXhqVtnMbYnVmkwN9t6UcZi14flu3LTZrhBQlZAKEGTPMGCPbauapg8e7XEud1ef41LasNjLbnlW3FD22HFhjtl2mS3gwlgk27mVlZTlLSeu8iNhUXtrwscQw2DxNm0UxDLlum4QhZVGUM07kkSD0NOnZVrViwLWW25XUCA0R031jpW9/iPD2wZxuIGVZZGHPMrEZVUczA0HI0aa7FuNvcqC5+HeKOoeyfIXNR5arFCb3AMRh7gF22yQQZ3U9IYSDVm8P47hcQxW3auWXUZwjEHPbG5BBMHqKZ8d2vBCYbD2y11sphACLaSPFckgKPqeVXqdURwXYpvH4gwNYihP5oXSFf5zXftVj1fEXxaEW+8fLO+XMSKF/l2iQNKHHiUVvyLGD/AIbY/dXtLMmsqei/5mQtO1jJuxcW4lhSBcuBTAnaW/Ss7nlUvtocMLKPZZCWMHIwIOhM7nTepODvEK6EApcUqynzEfzqDw3sbhhaCMhzHUsW8WaP3DSByER5Vg/49Ny5Oph/iUsbjSpLsv38ith1A11JNH+FZO6MCG0BIJYmZ/SoJGvl70M4p2cxVhzlDXLf6XUTpyDAfCfpXfhmMNtIbwkjUTE+vVvOl5o3G07/AEO1k67Fkw6VtYO4xwhULkZiT4s7GMgk7LEk8qjcP41ctED4h1Pxevn70cvq2IRktKbrxBVSpidJYkgD3NQW7F4oW2eEBAkWw0s3WNMs+Uma6HQ5lFXkdP8A9PK9ZFOSUeAZh+FXMTecYe0TpLawFUn4nOw15b068C7I28OA90i5cGo0hEPkOZ8z8hXP8OuI2ralAoRz8RI1blDHcjcRy+lNPEMMApdPh/UOaHlPkevmNxtq6uWRw9jpP/dxOKCncadrswRir29Ar92X12G/rTBdQEcv73pdx9qGaNq4s7jsxsY7kPiF6eW/2oN2gs5LRHmKa8Lw2fEelB+2GEy2WbzH3osORLJFeWSbEmaYewXBmxOJEMUFsd4XG6kfAZ8mg+gNALdssQFBJOwAkn2q1fw94Fdwli5fvDLnUll1DKBoqsRsW3idj12674BjyWXwYd6i238LKNeU8hvuQAfSRXd7gCZFBhSyeL6ENtlI/ppVRN+JKWiIt3bhGwa49sqOnhblXe3+JmEdSLtvEJO4W4zTtzZ/70qklpLbkp/A5WeF/lr2Ivi8C91kYGJCi2pUATpJmPQeVcPzQS6xa2XtXVUsusFGg7gaFWBGn7aWcN+IWEnJbwyopOty5lLyYiBrP/UfemproPchrYKKpLJJAGZs2wM6AczuT1oYyrkOS8HuDNtGazcLJauqhtyrORzRpGgIOgnmNpFa5AUxGGLP3lnNdRgj6aCc2nhzKYAOvPXSfXLlbCSpCOzOxUEIPDlVdZKgA+5HSa8xXaa2L967mBtIYzKxCXCRlKmfiuSAoAnQnoKPUitDN7F5VOYsgPheCJJVycwMwYVs245n3BfiV2bw9xRkVReuDMrgSTlAADGZIbQeUe1eW8eoV8w7sMAghiwLq5u3FUMJyjVdYJIAjaTHHLIAM6G3bVQYzFQVzSddFB5+Y9qlKuAErKDdCCQdCDB9a0p37X9lAbX5uxqAJuoQcwgkF484k/PnSRRFDR+Hh/i3NY8I+9PZ4ggEEikHsEk3Ln/SPvR7iFgNoDBrndTHVk+xA1i+IWlHxCiHZlrMG45kbBeZHM1XdzAt3kTImrR7OcOR8NbBClV122J38W4qseNKReNNvcm4zCC6mTMlyy+oJhojWc3PSknjXAktgm2dVEIqwpIH7m6U+4OzYsJdQscp8UMdVn4hPMc5oFjMRw2AjPlMyXklgPNp0nppvWux1IB8P4y6IDZQswIzaEwCRmM9P6VFftXhL6nDXCRaDF0ZpAB3JPOSdQT5DpTlwztpw62Ftq9uDoCSNBzk/LXnSnf4jgxinVsPadWuMM621JGpg7fDUtLsTcLdluzNq2/eh+8zCAzSfByAk6D0ozxprOGRnRFVrhAYoBmc+Z9NJNRFwJtkNJNuJEAxH2FQO2mBe+luASFGfKNpgZQdttTv/KlarYVWKOP7Kd5efkMx8p1roezeQGNaYLGfEWZVcl+2IIJ+MD7ED51phc+WSJ5UnLKce+xnkqYn/k/8A+Qrym7uz+37V7SvXZQTsLAojh20obZuV3W7FLnHYZKHdBoGV0qu/wARMH3mLtzH/LUSeXjYj0mnfD4rSlvtGguYhi22RQfqaDC3jlZMauRJ7E8PFhFca94CDA0GhyzRphpQbsq0g5iTkXQE7eY5UX76gzZfehuSNtC/xjgQuP3to93e6yQH5axsf8Q95qInHL6Oq3AUuouViTpcQ/CGEQRvB1GtHsTernxPCJftBX0ZRKON1P8AMHmK0wztxcLNHQ9THFkXqRuK+6X7nLBYkXBK+4/vn/fqMxCE3dRHlUSw9zD3MrjX6OvUGmazbW+oIPjIlT+4cx6zSJNppPfx/Y6f8R6HHOPr4Kp/79zXCABNaF8dwCXbZR2KqSCSo101okwKgjKaCcSxSBpumLa+IjXx5RIQRrLGF96LHTyRS5tHnFs9w72V4NhMOourZyOQpXvHD3CGORP0wrXGMKqiTuZrp2m4ups4kWpIRlsuQ3heQWbzZRlKg9Z6UAfjhsqe8Y/mXtm8vhkLduAJZG2i27GYx1M70AGFUro0QCBlMGDoZmZ1E/8Amu3KVKiQhcrA1y9ZYQbYmNMhj5mT/pqBfZJlQR5GPuKkX+G3FaIkHQEaj/apeC7LXnEkZRzMHT6R9apNLuG026ojcGCveQXXyoCCxkCFBlokgT5c6ui12w4dechb6zAjOFti4RoDO6Hb4gNBVVXuygAJW5mjfSDHkDvHrXTAdjjeZUVyHYwFIEmdtjp5zUemRKlEtHDcQF3M2HZLqISC4YBM0bAasx5ycs8tDSZ2z401u6LttQzAHxr8Kz+oLqM3IM0xvG1N2Iw6YLDLZs5YVfin4mAGdiOcwdSNKQ+EYqxcBuObruWHezpZRVaEHwkksoH6l3IFVGKvYk5tLcCf+o3e5b0CopAVdYSSM58ywEHyq2sbjbl22WzsyePKSFIghggE7HQ6cwu+sUn8b4VgLqtc8FoI2UtbyIoJMKMq7if1RIGpqTw3jatbQW35qodtgFmSRodA0xB3NMlHahcZJML9nsSThr8yc1wLrqYca7zpty5jSq77e9nfyt9sg/hMfD/hMAlf5jy9KsXsqqj8ycveFbgNvUZWLaK3KdINQu0nC+9stYuGb1x8401Q8jHIGeXWhSrYglfh/wD8y5/0j70a4hcDMF1GsTQXsUCl66rbgQfUNFH8Rw8uwMxWHqP+wh1weAJuLbQZmYx7edM3aZsQot4bDEKYAkdOZjePKa7fh/wTJ3l5vQUwX2s2Sb90kRz6eVFijSsZBdyreLdieJ3CqM+eTlEGFCnXN6DmOR9a5Yv8N8R3i2LbZgFz3HOwYkgaTJmIpt4p+K2Gtkm2S/QAQZHI+vWhHY/8S7SfmLuJJD3HBRVBaFCgADoPuSa0+6i3Vi7xP8LsbZUtCOBOikzHLQjeoXZrDu9+2gJmfF1Eb709Yb8XbV24yXUZLZPheJ+YnSodnALb4il20pazeUuHEZZO5meZ6daGUpVugoaUNSOUUqxbKB8QnbziK37oXF5hfMFdPvBrfG4rKNIj71xs8U/eQB0pMWXYv4YdzjSFAC7wI1o5xzDZfEgEMJHrzpXW7dOIbMuXxeEnmvLUU549c2FVhupj50GSOqLRMkfaLXcv+3615UrxVlY9/BnBeHx2tTBiM1L9nFCieDvyBRp70xrmuArYcz5Uv8bxi9/cXmQinSdIDNHQxtRm3qfipf4pKYssIPw6EAyMsN9KuMd2SCV7BjgmNXMyiQsQAYmYjUA6f+KIh5oWWVrqusgM0EHWeYbyNFUAA3pM4qw8sqaOWIgqTtW0HJIrjxFvBXuBxEpHtS4STvYC7RFx1sOpV/UHmD1FRuDY0237pzAkQeh6j/CfoY86k4u5r5VDvIr6c+R8/PyqXvUuDf8Aw/qtF48n5H/R9mhuPjAmPM/1pQ7e4UJaLRoGXQetGeGY1gsMaFdvr84V43zJ/qFPxyi8kfNox9RB48rT+/n5EFMQHPiJzTIzHpovi15COQqVhsUAQrsBG0zI/wAx9RQm7cYjU6H2mubnWAZHL+zXZcbF6qGpL1wz4pOsbR6kbcvL6VMw3Ebuz3MsjdU06HqaWeFcSKDKTp56+3lz18zRfD3pQkSQQCADzG/MGZ196W40HGVoNWri5ouXLoABb+GguZgCojKYiSd5PTpTLwG0mUX1FySCFzjIQs6woMxIGuvMDnSNh+NKmdLtnO0gorRknUEvzKjSFHxHeP1M+G4mbdxla4S6K12+Gg/xFSUtiPCttDlBUaSWEmKKEfIM3b2IfbzG3AoUeIMCCuuoBHeCQQRqfhGtKrYh78s0WbA0geFTll1toAIzH9x56k8qP27ko6XLneIQWDiXKXADDRuUb4So1By6QKA43D37iAHwgCETb4j4tIgE7nn13o7QDi/qbZziREMmHt+G0mhyzBYF4BYTrPUzpJqRaw64cZyGuMcrLbkjRTlBY6HIZIWJmDPKomFRraqLkKk5CQTIPnOwO8iiaWy6C7nzMwAZtxAAVQByAgKB5fMXMvRaom9gOPHPdF0eIlTBkDQRETzIprx7BVa7ozsCZWNBvAMTmI0HoPKq+IAMie8GqvEA+RaIPT0g009m+IoVhsxafgB/VsZg7eXOB5VSlbI4UgbZ4V3eJuFiJuWwxjYNMGNPQ/OiAI2FTuE4S7ce4VQM2QkKwBJEjxQwEeIRHQDrRO1wdoAezlaNSumvksmsmeLc2y44nJWhi7PoFw6rMzvry9qAfiBwPF4u13dl1Cg6qSRPuKI8Ox9uwMtxttYIM+pB1+VccT2gFvNdU94sz4JYn/KJM+1NhJJINQaW4g3fwquBEOfxyA4O0SJI9BP0oJxbsJftXVtIe8zE+JRooBAlvn9DTtxD8V7WfK1i6nmygHzkE1Awf4mWXxIa5bNu0VA2zEGT05QaZcwaiLl/8O8SjBGa3Jn9XIbEeRoxw/h2Owlo2wRctaEqNTbMyxWdYjeKJ438SsI18KttzagA3DodIOixJPmTXaz2tw13Mtt8pLEAMNDpIE9DrBn/AHFufdFrR2PG4tNs/uA50C7N8Kx2Pdyr92iN8ZUmTMeHqQKk3sU6qSNSGgq2oI2IIPKpGG/Efuxke0qgaQpiDz06UMZJcINxbDtvs/etSr3rd4oZGU/xFG8Mms+un86OcJvAWrjPqgUzp02060j8M7U377lQ5yNI3k+/Lyp2tNbTDkXCAGENy0q9nuSVrZibeunMYcxJj05VlTns2ZMOY5aVlYhWmPkR8NiJozhMRFKmGuEEUVsXzV5Mel2gL8jLaxc7GoOKcG+0gEgKRp5dem9RsHd1qRZxQW8SZ1UCAdDoTr8vrQRt2Mxr3BLDeIqYUQCTpEEax5+Varjta6JqrgaDKdKDXHg0rJG2HlVtBjEYiQRUBcVl8M1AOMO1R71/nQQwvuDsg2L0jWtCIPShdrGmK7W8STUljZUpLgK2MZEggkRy3nkZoT2tx84dl5yu/rUgXaXu0N0lW9R96Z0+O8ib7MuUnKKt8cC8zTXldu58Mz51xruCbsI8CtK1zxCY1A86OcZwYC95a8LDUgbN/wD1589qA8EP8T2pnx/wGlSbUiJ0CMPxh7ZW4gTNqAXBJRo+ISYkTIPUDTSiGHxot23Cn/mW1CCA3jLI7gtzkBtdz6xSuXOYjqaJ4a6FlTJDjMvVG5EGfWfajW1UMT1BPCXg5GcQxkpHhMz4oMggxygfWakYi45HiZmG0kljppJB1+u1Cr4EMGAaCN+Wh2O/L7dK6YPDbMjMEnRSTvHluKqSXLDCFvLOeVKEePXT116dD1qLiWysTaGa23xAENDc/AeWs6dKj/l1Z92JHLYbgeZrxDmzkMy5NBERuBt096pxSITsPezfxLZhwdjIAMRDAwNN+h261rgr4tXcznMzGQDDDU6kg8gdZ23qDiXW24LLmeYZttecDb3Ota4vClCQDJZmUkzsI/nJj0qqIO3Y7jZ/NXrneI/eKoJuA5VUHQIIHPbTz562TZxhbURHIiI+8mqk/D/A5u9YwSLcwdiJA+eszT1wK6yNlmCNNDI+R2rNN3IdDgK8Q4rh4yu9qepXTqd9K44DGYa5GS2qjqPD5aldPrXuPQM/iVSwMbZfeVgnfnWYG/YDKgtkFhMiN+c8/eqCJ3F+ApeXKFRkOpV/Gp5/Cf5EUocT/CXBk5kZ7c/pBIUT5sHNOV2wywA/nt/vHzBqLirVxjHeNmA66ben8qJSa4BcU+RDu/hHYBP/AN4B0B3j2Fc8V+F2UL3N0OAwzgNvr8XTwidN6LWcO35hiLjgQCVzSpLeUaDfb2ovjMa6AMGyQJ8IJ5T+5av1JeStEfAI4p2VREfL3krIzzmBICspC9CvpqGmq5udnb97EPbsobhDESIAgHLMnTWrTtdonbwvbtXFkDxJr85PzoxwnCWHLdyHtMCGaCCCdCPiBnaNauM1dkcXVFd/h/wN1ci74XUxkPy+4NNfHserZ1Ch0U5WU8xsSPQzRduzRVR3L/xltd2j3NYEkqWIHiIk6xzqssD37GC4zBnVjJgkNy02/wBqJu1YuWwYix+5h5dPrWVy/Jt/h+tZSROpn//Z"
        cardTitle="Exotic"
        cardDescription="Taking care of them is not always easy because they need special attention."
        cardLink="www.google.com"
        cardButton="More information"/>
      </div>

    </div>
  );
}

export default App;
