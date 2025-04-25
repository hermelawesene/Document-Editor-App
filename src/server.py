import base64
import zipfile
import io

sfdt_base64 = "UEsDBBQAAAAIAIJmmVogYakZigMAAPUNAAAEAAAAc2ZkdORXW2/bIBT+Kx57jSLfY/ttbRd1UltVTfcwbX3wBSeotrFsorSN8t93AN9re620aZqWhwAGvu+cj8MBjojmjKTkBW/iiCGPFXu8QCUOkff9iALxT+D/4bT4ZeWIWJIjD2UkxFhhVHmm+0KJaLhPccY+oNMsyMMC7WLkHU+CPi+ginYR8tSlukBxXckPyLNca6m7ruusVq7u2o4Dn3fIc0xt6aqqqpumZqq2bi1QkiJvpfN5RVNjTS1oalEMdvOSYlkJwCY+K89EmZeyxBlYqIM5vOT9pC6xHLfNShDgU+EHJEQAAzKiG3y49bcYnbiLcQkiH9EVCXDhM0IzZYMFCronKS4VGKzc0dTPYHZ3kF8BEz9BoFDIlULx+Lw45ubLwcpXWA0aYeV6I3r8iRkxOIBuNiTd7OWHTHx5PZTASmiqYfAaH6KrFghCIk6pqY4GxgVbbhx3/eO6+nGbS/YsgwQGLhAIii5w7O8Tptz6hb8t/HynrGnGYKwYpMpBN7RIwWloPHVblQLlC6cVITIhhrADwkL8+IfyRdoqJ/1dqXLhRQBrK8zx6woDcigOodBKROOpL8sl9iOSbRWNh1nbrnXqdnelsoXXQhP988o8s2BtWk2gd4JGn6fRBzTGLI0xSWPM0xgDGr2l0dbmxcrp0eiTNOY8jdnQcJgRR4jAnwC35sGt1oc+7AScPQ9nD+AaHWq4aq9dPue4SEj2WMFN7L0abN9xXLVs41x7DbmmlGWUYeV8ByAhw0X5NvDA76g3BLvDMS5wFuLfgHWPn5iw7m1Y3WzSZonxdakQ+9npjEbPgnQAaTYJapjTWybzLfloZLrMR9ckLGhJY6Z88y8x6eSl4ZRe1pE7iKcdkRgeD9nruO46Ne/ySDZb8UrCmZaaCWe2665szXI0EzJhws/CobxXpKyJutCCq+qrD79xqQZ45z7cb2g2anvb19vtbWqR+7yXUabXqCes3dF1YNGXLMJPo/bUPe9y8J6wBI/niLqrE4q604lu3higbVhBW4CmVe21jj7vOnODgY7/+NnL47DNId3o7H39368ovTQ8GvDDEclU8p7Nz9M2ysSjtqkGbuARgyeEIe9BqTSWgQ/89i5b4pLPHwM7loJBHI8V8BwRa8EB+f2f80G9eh3VL58fe1hAgz90gCic6DfrfgBpXlfwEALiP4Ea0lS+aeD+zQLu0OknAAAA//8DAFBLAQItABQAAAAIAIJmmVogYakZigMAAPUNAAAEAAAAAAAAAAAAIAAAAAAAAABzZmR0UEsFBgAAAAABAAEAMgAAAKwDAAAAAA=="
 

try:
    sfdt_bytes = base64.b64decode(sfdt_base64)
except Exception as e:
    print("Base64 decode error:", e)
else:
    try:
        zip_file = zipfile.ZipFile(io.BytesIO(sfdt_bytes))
        for file_name in zip_file.namelist():
            with zip_file.open(file_name) as file:
                content = file.read().decode('utf-8')
                print(f"--- {file_name} ---\n{content}\n")
    except Exception as e:
        print("Zip extraction error:", e)