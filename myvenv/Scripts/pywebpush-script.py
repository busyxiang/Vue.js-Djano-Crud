#!"c:\users\ray.f\desktop\new folder\myvenv\scripts\python.exe"
# EASY-INSTALL-ENTRY-SCRIPT: 'pywebpush==1.9.4','console_scripts','pywebpush'
__requires__ = 'pywebpush==1.9.4'
import re
import sys
from pkg_resources import load_entry_point

if __name__ == '__main__':
    sys.argv[0] = re.sub(r'(-script\.pyw?|\.exe)?$', '', sys.argv[0])
    sys.exit(
        load_entry_point('pywebpush==1.9.4', 'console_scripts', 'pywebpush')()
    )
