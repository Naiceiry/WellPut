from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey, DateTime
# to check the password
from werkzeug.security import safe_str_cmp
from werkzeug.security import generate_password_hash

db = SQLAlchemy()
#------------------------------------------------------------------------------------------------------------------------------
#  USER
#------------------------------------------------------------------------------------------------------------------------------
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    full_name = db.Column(db.String(120))
    password = db.Column(db.String(250), nullable=False)
    birthday = db.Column(db.DateTime)
    phone = db.Column(db.String(120))
    sex = db.Column(db.String(120))
    personal_description = db.Column(db.String(220))
    avatar_url = db.Column(db.String(220), unique=False, nullable=True)
    city = db.Column(db.String(120)) 

    #relaciones de usuario (1 a muchos)
    #user_archive= db.relationship('UserArchives', lazy=True) --> Sólo hay una foto por usuario, por lo que se quita esta tabla
    characteristic_user = db.relationship('CharacteristicUser', lazy=True)
    spokenLanguages = db.relationship('SpokenLanguages', lazy=True)
    
    
    # --- SE HAN UNIDOS LOS DOS TIPOS DE REVIEWS A UNA SOLA TABLA ----
    # #forma para relacionar una misma tabla con dos columnas de otra tabla a la vez
    # owner = db.relationship('ReviewOwner', backref='owner', lazy='joined', foreign_keys ='ReviewOwner.owner_id')
    # tenant = db.relationship('ReviewOwner', backref='tenant', lazy='joined', foreign_keys ='ReviewOwner.tenant_id')

    #relaciones de Room
    owner_room = db.relationship('Room', lazy=True)
    
    # --- SE HAN UNIDOS LOS DOS TIPOS DE REVIEWS A UNA SOLA TABLA ----
    #review_room= db.relationship('ReviewRoom', lazy=True)
    
    #forma para relacionar una misma tabla con dos columnas de otra tabla a la vez
    owner = db.relationship('Reviews', backref='owner', lazy='joined', foreign_keys ='Reviews.owner_id')
    tenant = db.relationship('Reviews', backref='tenant', lazy='joined', foreign_keys ='Reviews.tenant_id')
    
    def __repr__(self):
        return '<User %r>' % self.full_name

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "full_name": self.full_name,
            "phone": self.phone,
            "sex": self.sex,
            "password":self.password,
            "birthday": self.birthday,
            "avatar_url": self.avatar_url,
            "personal_description": self.personal_description,
            "city": self.city,
        }
        
    # method to check the password and that verify that it is the user password
    def check_password(self, password_param):
       return safe_str_cmp(self.password.encode('utf-8'), password_param.encode('utf-8'))
   

class CharacteristicUser(db.Model):
    #quite el name y la descrpcion por que ya estan en la tabla con la que se relaciona
    id = db.Column(db.Integer, primary_key=True) 
    Characteristic_id = db.Column(db.Integer, db.ForeignKey('characteristic.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    
    def __repr__(self):
        return '<CharacteristicUser %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "Characteristic_id": self.Characteristic_id,
            "user_id": self.user_id

        }  

  
class Characteristic(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(20)) #cambie a type para decir si es hobby ocupacion 
    name = db.Column(db.String(220)) #y el nombre de la ocupacion o hobby
    
    # 1 característica puede ser tenida por muchos usuarios (1 a muchos)
    characteristic_user = db.relationship('CharacteristicUser', lazy=True)

    def __repr__(self):
        return '<Characteristic %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "type": self.type
        } 

# --- SE HAN UNIDOS LOS DOS TIPOS DE REVIEWS A UNA SOLA TABLA ----
# class ReviewOwner(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     owner_id = db.Column(db.Integer, db.ForeignKey('user.id'))
#     tenant_id = db.Column(db.Integer, db.ForeignKey('user.id'))
#     comment = db.Column(db.String(220))
#     rating = db.Column(db.Integer)

#     def __repr__(self):
#         return '<ReviewOwner %r>' % self.id

#     def serialize(self):
#         return {
#             "id": self.id,
#             "owner_id": self.owner_id,
#             "tenant_id": self.tenant_id,
#             "comment": self.comment,
#             "rating": self.rating
#         }  

# --> Sólo hay una foto por usuario, por lo que se quita esta tabla
# class UserArchives(db.Model): 
#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
#     url = db.Column(db.String(500))

#     def __repr__(self):
#         return '<UserArchives %r>' % self.id

#     def serialize(self):
#         return {
#             "id": self.id,
#             "user_id": self.user_id,
#             "url": self.url
#         }  


class SpokenLanguages(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    languages_id = db.Column(db.Integer, db.ForeignKey('languages.id'))
    
    def __repr__(self):
        return '<SpokenLanguages %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "languages_id": self.languages_id
        }  
 
class Languages(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))
    locale = db.Column(db.String(50))

    Spoken_languages = db.relationship('SpokenLanguages', lazy=True)
    

    def __repr__(self):
        return '<Languages %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "locale": self.locale
        }    
#------------------------------------------------------------------------------------------------------------------------------
#  ROOM
#------------------------------------------------------------------------------------------------------------------------------
class Room (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    #photo_url = db.Column(db.String(255), unique=False, nullable=True) -->> Se encuentran el la tabla RoomArchive
    description = db.Column(db.String(280))
    address = db.Column(db.String(220))
    city = db.Column(db.String(120))
    country = db.Column(db.String(120))
    price = db.Column(db.Integer)
    deposit = db.Column(db.Integer)
    title =db.Column(db.String(120))
    type_bed = db.Column(db.String(50))
    latitude = db.Column(db.Float(7))
    longitude = db.Column(db.Float(7))

    room_archive = db.relationship('RoomArchive', lazy=True)
    #review_Room = db.relationship('ReviewRoom', lazy=True)
    reviews = db.relationship('Reviews', lazy=True)
    expenses_included = db.relationship('ExpensesIncluded', lazy=True)
    features = db.relationship('Features', lazy=True)

    def __repr__(self):
        return '<Room %r>' % self.title

    def serialize(self):
        return {
            "id": self.id,
            "owner_id": self.owner_id,
           # "photo_url": self.photo_url,
            "description": self.description,
            "address": self.address,
            "city": self.city,
            "country": self.country,
            "price": self.price,
            "deposit": self.deposit,
            "title": self.title, 
            "type_bed": self.type_bed,
            "latitude": self.latitude,
            "longitude": self.longitude,
        }


class RoomArchive(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(250))
    room_id = db.Column(db.Integer, db.ForeignKey('room.id'))

    def __repr__(self):
        return '<RoomArchive %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "url": self.url,
            "room_id": self.room_id
        }   

# --- SE HAN UNIDOS LOS DOS TIPOS DE REVIEWS A UNA SOLA TABLA ----
# class ReviewRoom(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
#     room_id = db.Column(db.Integer, db.ForeignKey('room.id'))
#     comment = db.Column(db.String(220))
#     rating = db.Column(db.Integer)

#     def __repr__(self):
#         return '<ReviewRoom %r>' % self.id

#     def serialize(self):
#         return {
#             "id": self.id,
#             "user_id": self.user_id,
#             "room_id": self.room_id,
#             "comment": self.comment,
#             "rating": self.rating
#         }  
 
  
class ExpensesIncluded(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    room_id = db.Column(db.Integer, db.ForeignKey('room.id'))
    description = db.Column(db.String(20))

    def __repr__(self):
        return '<ExpensesIncluded %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "room_id": self.id,
            "description": self.description
        }  
         
class Features(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    room_id = db.Column(db.Integer, db.ForeignKey('room.id'))
    description = db.Column(db.String(20))

    def __repr__(self):
        return '<Features %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "room_id": self.room_id,
            "description": self.description,
        }  
        
class Reviews(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    tenant_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    room_id = db.Column(db.Integer, db.ForeignKey('room.id'))
    comment = db.Column(db.String(220))
    rating = db.Column(db.Integer)
    date = db.Column(db.DateTime)

    def __repr__(self):
        return '<Reviews %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "owner_id": self.owner_id,
            "tenant_id": self.tenant_id,
            "room_id": self.room_id,
            "comment": self.comment,
            "rating": self.rating,
            "date": self.date
        }  


#------------------------------------------------------------------------------------------------------------------------------
#  SEED
#------------------------------------------------------------------------------------------------------------------------------
class SeedDataUser:

  def __init__(self):
    self.first_user = None
    self.second_user = None
    self.third_user = None
    self.fourth_user = None
    self.fifth_user = None

  def create_seed_user(self):
    self.first_user = User( 
        id = 1,
        email = "adan_user@gmail.com",
        full_name = "Adan Genesis",
        password = "1111",
        birthday = "01/01/1980",
        phone = "666362969",
        sex = "male",
        personal_description = "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        avatar_url = "https://d1bvpoagx8hqbg.cloudfront.net/259/b59e40d45c7460cb65467d2000705086.jpg",
        city = "Madrid"
    ) 

    self.second_user = User( 
        id = 2,
        email = "eva_user@gmail.com",
        full_name = "Eva Gelion",
        password = "1111",
        birthday = "01/01/1982",
        phone = "666362970",
        sex = "female",
        personal_description = "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
        avatar_url = "https://img.europapress.es/fotoweb/fotonoticia_20200907131946_420.jpg",
        city = "Madrid"
    )

    self.third_user = User( 
        id = 3,
        email = "sara_user@gmail.com",
        full_name = "Sara Genesis",
        password = "1111",
        birthday = "01/01/1985",
        phone = "666362978",
        sex = "female",
        personal_description = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.",
        avatar_url = "https://img.europapress.es/fotoweb/fotonoticia_20180118120033_420.jpg",
        city = "Barcelona"
    )

    self.fourth_user = User( 
        id = 4,
        email = "abraham_user@gmail.com",
        full_name = "Abraham Genesis",
        password = "1111",
        birthday = "01/01/1990",
        phone = "666362980",
        sex = "male",
        personal_description =  "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio.",
        avatar_url = "https://i.pinimg.com/474x/98/04/af/9804afb070c93c2260c8de5505651e7e.jpg",
        city = "Granada"
    )

    self.fifth_user = User( 
        id = 5,
        email = "noe_user@gmail.com",
        full_name = "Noé Genesis",
        password = "1111",
        birthday = "01/01/1992",
        phone = "666362986",
        sex = "male",
        personal_description = "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates.",
        avatar_url = "https://media.istockphoto.com/photos/teenage-boy-with-glasses-sitting-outside-picture-id1175540541?k=6&m=1175540541&s=612x612&w=0&h=1KwTZmQz7E6iMcB4vGYOfLYSWz62qtR7GdaUrI7-Jjw=",
        city = "Sevilla"
    )
  
    db.session.add(self.first_user)
    db.session.add(self.second_user)
    db.session.add(self.third_user)
    db.session.add(self.fourth_user)
    db.session.add(self.fifth_user)
    db.session.commit()

  def create_seed_room(self):
    self.first_room = Room( 
        id = 1,
        owner_id = self.first_user.id,
        description = "Cras ac fermentum neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        address = "Bastero 6",
        city = "Madrid",
        country = "Spain",
        price = 450,
        deposit = 450,
        title = "Habitacion en casa moderna.",
        type_bed = "single",
        latitude = 33.4329,
        longitude = -4.642371
    )

    self.second_room = Room( 
        id = 2,
        owner_id = self.first_user.id,
        description = "Vestibulum auctor purus in leo laoreet, ac aliquam sem tincidunt. Vivamus eleifend magna a leo pulvinar.",
        address = "Bastero 6",
        city = "Madrid",
        country = "Spain",
        price = 400,
        deposit = 400,
        title = "Habitacion pequeña y luminosa.",
        type_bed = "single",
        latitude = 33.4329,
        longitude = -4.642371
    )

    self.third_room = Room( 
        id = 3,
        owner_id = self.first_user.id,
        description = "Aliquam sit amet interdum lacus. Proin finibus vehicula sagittis.",
        address = "Bastero 6",
        city = "Madrid",
        country = "Spain",
        price = 500,
        deposit = 500,
        title = "Habitacion suite con cama grande.",
        type_bed ="double",
        latitude = 33.4329,
        longitude = -4.642371
    )

    self.fourth_room = Room( 
        id = 4,
        owner_id = self.first_user.id,
        description = "Ut non lectus quis libero ultricies luctus sed eget justo. Nunc molestie finibus vulputate. Aliquam erat volutpat.Ut non lectus quis libero.",
        address= "Bastero 6",
        city= "Madrid",
        country = "Spain",
        price = 500,
        deposit = 500,
        title = "Hermosa habitación amueblada.",
        type_bed = "double",
        latitude = 33.4329,
        longitude = -4.642371
    )

    db.session.add(self.first_room)
    db.session.add(self.second_room)
    db.session.add(self.third_room)
    db.session.add(self.fourth_room)
    db.session.commit()

# *********** ESTE SEED NO FUNCIONA **************
#   def create_seed_reviews(self):
#     self.first_review = Reviews( 
#         id = 1,
#         owner_id = self.first_user.id,
#         tenant_id = self.second_user.id,
#         room_id = self.first_room,
#         comment = "The neighborhood is great, it is well connected by public transport, the metro is 5 minutes away and there are many nice areas to hang out.",
#         rating = 4,
#         date = "01/01/2021",
#     )

#     self.second_review = Reviews( 
#         id = 2,
#         owner_id = self.first_user.id,
#         tenant_id = self.third_user.id,
#         room_id = self.third_room,
#         comment = "The area of the flat has a lot of night life. It is amazing!",
#         rating = 5,
#         date = "22/05/2021",
#     )

#     self.third_review = Reviews( 
#         id = 3,
#         owner_id = self.first_user.id,
#         tenant_id = self.fourth_user.id,
#         room_id = self.fourth_room,
#         comment = "The area has many vegan and garden produce stores. I loved that !!",
#         rating = 3,
#         date = "10/06/2021",
#     )


#     db.session.add(self.first_review)
#     db.session.add(self.second_review)
#     db.session.add(self.third_review)
#     db.session.commit()
    
    
  def create_seed_data(self):
    self.create_seed_user()
    self.create_seed_room()
    # *********** ESTE SEED NO FUNCIONA **************
    #self.create_seed_reviews()
    

#------------------------------------------------------------------------------------------------------------------------------
# Comments:
'''
1. Create 5 fake users  
    1.1 One owner.
    1.2 Three roomates.
    1.3 One searching.
2. Create 4 fake rooms.
    2.1 Three roomates(1.2) are living here.

3. Creation order
    3.1 Create users.
    3.2 Create Rooms.
    3.3 Create associations between em.
    
    '''




#------------------------------------------------------------------------------------------------------------------------------
