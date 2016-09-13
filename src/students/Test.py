class Test(object):
    @classmethod
    def clsM(cls):
        print cls.
    @staticmethod
    def staM():
        print "HJello"


if __name__ == '__main__':
    Test.clsM()
    Test.staM();
