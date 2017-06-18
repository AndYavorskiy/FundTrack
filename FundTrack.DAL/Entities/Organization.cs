﻿using System.Collections.Generic;

namespace FundTrack.DAL.Entities
{
    /// <summary>
    /// Organization entity
    /// </summary>
    public class Organization
    {
        /// <summary>
        /// Id of Organization
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Name of Organization
        /// </summary>    
        public string Name { get; set; }

        /// <summary>
        /// Description of Organization
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// Indicates if that the Organization is banned
        /// </summary>
        public bool IsBanned { get; set; }

        /// <summary>
        /// Membership navigation property
        /// </summary>
        public virtual ICollection<Membership> Memberships { get; set; }

        /// <summary>
        /// OrgAddresse navigation property
        /// </summary>
        public virtual ICollection<OrgAddress> OrgAddresses { get; set; }

        /// <summary>
        /// BankAccount navigation property
        /// </summary>
        public virtual ICollection<BankAccount> BankAccounts { get; set; }

        /// <summary>
        /// OrgAccounts navigation property
        /// </summary>
        public virtual ICollection<OrgAccount> OrgAccounts { get; set; }

        /// <summary>
        /// Request navigation property
        /// </summary>
        public virtual ICollection<Request> Requests { get; set; }

        /// <summary>
        /// Complaint navigation property
        /// </summary>
        public virtual ICollection<Complaint> Complaints { get; set; }

        /// <summary>
        /// Event navigation property
        /// </summary>
        public virtual ICollection<Event> Events { get; set; }
    }
}
