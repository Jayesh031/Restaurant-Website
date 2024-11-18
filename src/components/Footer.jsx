import React from 'react'
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import twitter from "../assets/twitter.png"
import { Mail, MapPin, Phone } from 'lucide-react'


const Footer = () => {
    return (
        <footer className="bg-muted text-muted-foreground bg-blue-50 pt-14 ">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-blue-500">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#Home">Home</a></li>
                            <li><a href="#Popular">Menu</a></li>
                            <li><a href="#Reviews">About Us</a></li>
                            <li><a href="#">Reservations</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-blue-500">Contact Us</h3>
                        <div className='flex gap-2'>
                            <MapPin className='text-blue-500' />
                            <div>
                                <p>123 Restaurant Street</p>
                                <p>City, State 12345</p>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <Phone className='text-blue-500 my-4' />
                            <p>Phone: (123) 456-7890</p>
                        </div>
                        <div className='flex gap-2'>
                            <Mail className='text-blue-500' />
                            <p>Email: info@restaurant.com</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-blue-500">Opening Hours</h3>
                        <p>Monday - Friday: 11am - 10pm</p>
                        <p>Saturday - Sunday: 10am - 11pm</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-blue-500">Follow Us</h3>

                        <div className="flex space-x-4">


                            <img src={facebook} alt="facebook" className="h-8 w-8" />
                            <span className="sr-only">Facebook</span>



                            <img src={instagram} alt="instagram" className="h-7 w-7" />
                            <span className="sr-only">Instagram</span>



                            <img src={twitter} alt="twitter" className="h-8 w-8" />
                            <span className="sr-only">Twitter</span>

                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-muted-foreground/20 pt-8 text-center">
                    <p>&copy; {new Date().getFullYear()} Your <span className='text-blue-500 font-bold'>Maharaja</span>Bitess. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer