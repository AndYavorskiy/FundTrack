﻿using FundTrack.DAL.Abstract;
using FundTrack.DAL.Entities;
using System.Collections.Generic;
using System.Linq;

namespace FundTrack.DAL.Concrete
{
    /// <summary>
    /// class for CRUD operation with entity - event
    /// </summary>
    /// <seealso cref="FundTrack.DAL.Abstract.IRepository{FundTrack.DAL.Entities.User}" />
    public class EventRepository : IRepository<Event>
    {
        private readonly FundTrackContext _context;

        /// <summary>
        /// Initializes a new instance of the <see cref="EventRepsitory"/> class.
        /// </summary>
        /// <param name="context">The context.</param>
        public EventRepository(FundTrackContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Creates the event.
        /// </summary>
        /// <param name="item">The event.</param>
        /// <returns></returns>
        public Event Create(Event item)
        {
            _context.Events.Add(item);
            return item;
        }

        /// <summary>
        /// Deletes event from data base
        /// </summary>
        /// <param name="id">Recives id of event</param>
        public void Delete(int id)
        {
            Event _event = _context.Events.FirstOrDefault(c => c.Id == id);
            if (_event != null)
                _context.Events.Remove(_event);
        }

        /// <summary>
        /// Gets the event by id.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns></returns>
        public Event Get(int id)
        {
            return _context.Events.FirstOrDefault(e => e.Id == id);
        }

        /// <summary>
        /// Gets all events in database
        /// </summary>
        /// <returns>
        /// Collection all events
        /// </returns>
        public IEnumerable<Event> Read()
        {
            return _context.Events;
        }

        /// <summary>
        /// Updates the specified event.
        /// </summary>
        /// <param name="item">The event.</param>
        public Event Update(Event item)
        {
            _context.Update(item);
            return item;
        }
    }
}